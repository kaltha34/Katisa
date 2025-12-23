import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUsers, FiVideo, FiDownload } from 'react-icons/fi';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';

const WebinarsPage = () => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registrationCounts, setRegistrationCounts] = useState({});
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    university: ''
  });
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pendingWebinar, setPendingWebinar] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchWebinars();
    fetchRegistrationCounts();
    
    // Update current time every minute to check if webinars are live
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, []);

  const fetchRegistrationCounts = async () => {
    try {
      const registrationsSnapshot = await getDocs(collection(db, 'webinar-registrations'));
      const counts = {};
      
      registrationsSnapshot.forEach((doc) => {
        const webinarId = doc.data().webinarId;
        counts[webinarId] = (counts[webinarId] || 0) + 1;
      });
      
      setRegistrationCounts(counts);
    } catch (error) {
      console.error('Error fetching registration counts:', error);
    }
  };

  const fetchWebinars = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'webinars'));
      const webinarData = [];
      
      querySnapshot.forEach((doc) => {
        webinarData.push({ 
          id: doc.id, 
          ...doc.data()
        });
      });

      // Sort by date (upcoming first)
      webinarData.sort((a, b) => {
        const dateA = a.date?.toMillis() || 0;
        const dateB = b.date?.toMillis() || 0;
        return dateB - dateA;
      });

      setWebinars(webinarData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching webinars:', error);
      setLoading(false);
    }
  };

  // Check if webinar is live based on scheduled time
  // Goes live 5 minutes before scheduled time and stays live for 3 hours
  const isWebinarLive = (webinar) => {
    if (!webinar.date?.toDate) return false;
    
    const webinarStart = webinar.date.toDate();
    const fiveMinutesBefore = new Date(webinarStart.getTime() - 5 * 60 * 1000);
    const threeHoursAfter = new Date(webinarStart.getTime() + 3 * 60 * 60 * 1000);
    
    return currentTime >= fiveMinutesBefore && currentTime <= threeHoursAfter;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      // Generate unique access token for this registration
      const accessToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      
      await addDoc(collection(db, 'webinar-registrations'), {
        ...registrationData,
        webinarId: selectedWebinar.id,
        webinarTitle: selectedWebinar.title,
        accessToken: accessToken,
        registeredAt: serverTimestamp()
      });

      // Update registration count
      setRegistrationCounts(prev => ({
        ...prev,
        [selectedWebinar.id]: (prev[selectedWebinar.id] || 0) + 1
      }));

      setRegistrationSuccess(true);
      setTimeout(() => {
        setShowRegistration(false);
        setRegistrationSuccess(false);
        setRegistrationData({ name: '', email: '', phone: '', university: '' });
      }, 3000);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const joinWebinar = (webinar) => {
    setPendingWebinar(webinar);
    setShowEmailPrompt(true);
    setEmailError('');
    setEmailInput('');
  };

  const verifyAndJoin = async () => {
    try {
      // Check if email is registered for this webinar
      const registrationsRef = collection(db, 'webinar-registrations');
      const querySnapshot = await getDocs(registrationsRef);
      
      let isRegistered = false;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.webinarId === pendingWebinar.id && 
            data.email.toLowerCase() === emailInput.toLowerCase().trim()) {
          isRegistered = true;
        }
      });

      if (isRegistered) {
        setShowEmailPrompt(false);
        window.open(`/webinar-room/${pendingWebinar.roomName}`, '_blank');
      } else {
        setEmailError('❌ Email not registered for this webinar. Please register first.');
      }
    } catch (error) {
      console.error('Error verifying:', error);
      setEmailError('Error verifying registration. Please try again.');
    }
  };

  const getQRCode = (webinarId) => {
    const url = `${window.location.origin}/webinars?id=${webinarId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
  };

  return (
    <>
      <SEO 
        title="Webinars & Workshops - Katisa Technologies"
        description="Join our free webinars and workshops on AI, web development, and technology. Learn from industry experts and enhance your skills."
      />

      {/* Hero */}
      <Section bgColor="bg-gradient-to-r from-primary to-accent">
        <div className="text-center text-white py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            🎓 Webinars & Workshops
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Free online sessions on AI, Technology, and Innovation. Join from anywhere!
          </motion.p>
        </div>
      </Section>

      {/* Upcoming Webinars */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Sessions</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
          ) : webinars.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <FiCalendar className="mx-auto text-6xl text-gray-300 mb-4" />
              <p className="text-gray-600 text-lg mb-4">No webinars scheduled yet</p>
              <p className="text-gray-500">Check back soon for upcoming sessions!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>
                    </div>
                    <img 
                      src={getQRCode(webinar.id)} 
                      alt="QR Code"
                      className="w-20 h-20 rounded border"
                    />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="mr-2" />
                      <span className="text-sm font-medium mr-2">Date:</span>
                      <span className="text-sm">
                        {webinar.date?.toDate ? 
                          webinar.date.toDate().toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })
                          : 'Date TBD'
                        }
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiClock className="mr-2" />
                      <span className="text-sm font-medium mr-2">Time:</span>
                      <span className="text-sm">
                        {webinar.date?.toDate ? 
                          webinar.date.toDate().toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            hour12: true
                          })
                          : 'Time TBD'
                        }
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiUsers className="mr-2" />
                      <span className="text-sm font-medium mr-2">Speaker:</span>
                      <span className="text-sm">{webinar.speaker || 'TBD'}</span>
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      <span className={`font-semibold ${(registrationCounts[webinar.id] || 0) >= 20 ? 'text-red-600' : 'text-green-600'}`}>
                        {20 - (registrationCounts[webinar.id] || 0)} seats left
                      </span>
                      <span className="text-gray-500 ml-2">({registrationCounts[webinar.id] || 0}/20 registered)</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        const count = registrationCounts[webinar.id] || 0;
                        if (count >= 20) {
                          alert('❌ This session is full! Maximum 20 participants allowed.');
                          return;
                        }
                        
                        // Check if webinar has already started
                        if (webinar.date?.toDate) {
                          const webinarStart = webinar.date.toDate();
                          const now = new Date();
                          if (now >= webinarStart) {
                            alert('❌ Registration closed. Webinar has already started!');
                            return;
                          }
                        }
                        
                        setSelectedWebinar(webinar);
                        setShowRegistration(true);
                      }}
                      className="flex-1"
                      variant="primary"
                      disabled={
                        registrationCounts[webinar.id] >= 20 || 
                        (webinar.date?.toDate && new Date() >= webinar.date.toDate())
                      }
                    >
                      {registrationCounts[webinar.id] >= 20 
                        ? 'Session Full' 
                        : (webinar.date?.toDate && new Date() >= webinar.date.toDate())
                          ? 'Registration Closed'
                          : 'Register Now'}
                    </Button>
                    {isWebinarLive(webinar) && (
                      <Button
                        onClick={() => joinWebinar(webinar)}
                        className="flex-1 bg-green-500 hover:bg-green-600"
                      >
                        <FiVideo className="inline mr-2" />
                        Join Live
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Registration Modal */}
      {showRegistration && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowRegistration(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowRegistration(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">Register for Webinar</h3>
            <p className="text-gray-600 mb-6">{selectedWebinar?.title}</p>

            {registrationSuccess ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-xl font-bold text-green-600">Registration Successful!</p>
                <p className="text-gray-600 mt-2">Check your email for joining details</p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={registrationData.name}
                  onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={registrationData.email}
                  onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={registrationData.phone}
                  onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="University / Company"
                  value={registrationData.university}
                  onChange={(e) => setRegistrationData({...registrationData, university: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" className="w-full" variant="primary">
                  Complete Registration
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* Features */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join Our Webinars?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Practical Skills</h3>
              <p className="text-gray-600 text-sm">Learn real-world skills from industry experts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold mb-2">100% Free</h3>
              <p className="text-gray-600 text-sm">All sessions are completely free to attend</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="font-bold mb-2">Certificates</h3>
              <p className="text-gray-600 text-sm">Get completion certificates for attended sessions</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Email Verification Modal */}
      {showEmailPrompt && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowEmailPrompt(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">🔒 Verify Your Registration</h3>
            <p className="text-gray-600 mb-4">
              Enter the email address you used to register for this webinar:
            </p>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && verifyAndJoin()}
            />
            {emailError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-3 text-sm">
                {emailError}
              </div>
            )}
            <div className="flex gap-3">
              <Button
                onClick={() => setShowEmailPrompt(false)}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={verifyAndJoin}
                className="flex-1"
              >
                Join Webinar
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WebinarsPage;
