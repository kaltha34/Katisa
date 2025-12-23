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
    <div className="space-y-8">
      {/* Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white shadow-xl"
      >
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">{stats.average}</div>
            <div className="flex justify-center mb-2">
              <StarRating rating={Math.round(parseFloat(stats.average))} />
            </div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">{stats.total}</div>
            <div className="text-white/80">Total Reviews</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">
              {stats.distribution[4]}
            </div>
            <div className="flex justify-center mb-2">
              <StarRating rating={5} />
            </div>
            <div className="text-white/80">5-Star Reviews</div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="mt-6 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-3">
              <span className="text-sm w-12">{star} ⭐</span>
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${stats.total > 0 ? (stats.distribution[star - 1] / stats.total) * 100 : 0}%`
                  }}
                ></div>
              </div>
              <span className="text-sm w-12 text-right">{stats.distribution[star - 1]}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Feedback Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {feedbacks.length === 0 ? (
          <div className="col-span-2 text-center py-12 text-gray-500">
            <p className="text-xl mb-2">No feedback yet</p>
            <p>Be the first to share your experience!</p>
          </div>
        ) : (
          feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{feedback.name}</h4>
                  <StarRating rating={feedback.rating} />
                </div>
                <div className="text-xs text-gray-500">
                  {feedback.createdAt?.toDate().toLocaleDateString()}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{feedback.feedback}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackDisplay;
