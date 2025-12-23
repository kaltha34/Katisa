import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const FeedbackDisplay = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    average: 0,
    total: 0,
    distribution: [0, 0, 0, 0, 0]
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      console.log('Fetching feedback from Firebase...');
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      console.log('Got documents:', querySnapshot.size);
      const feedbackData = [];
      const ratings = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log('Document data:', data);
        feedbackData.push({ id: doc.id, ...data });
        ratings.push(data.rating);
      });

      // Sort by createdAt in memory (descending - newest first)
      feedbackData.sort((a, b) => {
        const timeA = a.createdAt?.toMillis() || 0;
        const timeB = b.createdAt?.toMillis() || 0;
        return timeB - timeA;
      });

      // Limit to 10 most recent
      const limitedFeedback = feedbackData.slice(0, 10);
      console.log('Setting feedback:', limitedFeedback);

      setFeedbacks(limitedFeedback);

      // Calculate statistics
      if (ratings.length > 0) {
        const average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        const distribution = [0, 0, 0, 0, 0];
        ratings.forEach(rating => {
          distribution[rating - 1]++;
        });

        setStats({
          average: average.toFixed(1),
          total: ratings.length,
          distribution
        });
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setLoading(false);
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={16}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Loading feedback...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Compact Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-accent rounded-xl p-4 text-white shadow-lg"
      >
        <div className="flex items-center justify-around text-center">
          <div>
            <div className="text-3xl font-bold">{stats.average || "0"}</div>
            <div className="flex justify-center mt-1">
              <StarRating rating={Math.round(parseFloat(stats.average))} />
            </div>
          </div>
          <div className="border-l border-white/30 h-12"></div>
          <div>
            <div className="text-3xl font-bold">{stats.total}</div>
            <div className="text-sm text-white/80">Reviews</div>
          </div>
          <div className="border-l border-white/30 h-12"></div>
          <div>
            <div className="text-3xl font-bold">{stats.distribution[4]}</div>
            <div className="text-sm text-white/80">5-Star</div>
          </div>
        </div>
      </motion.div>

      {/* Compact Feedback Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {feedbacks.length === 0 ? (
          <div className="col-span-2 text-center py-8 text-gray-500">
            <p>No feedback yet. Be the first!</p>
          </div>
        ) : (
          feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-4 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-800">{feedback.name}</h4>
                  <StarRating rating={feedback.rating} />
                </div>
                <div className="text-xs text-gray-400">
                  {feedback.createdAt?.toDate().toLocaleDateString()}
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">{feedback.feedback}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackDisplay;
