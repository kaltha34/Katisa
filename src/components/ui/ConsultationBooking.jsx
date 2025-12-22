import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiCheck } from 'react-icons/fi';

const ConsultationBooking = () => {
  const benefits = [
    'Choose your preferred time slot',
    'Automatic calendar invite sent to both parties',
    'Receive email confirmation',
    'Add to your Google/Outlook calendar',
    'Reschedule easily if needed'
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <FiCalendar className="text-primary text-3xl" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Schedule a Consultation</h2>
          <p className="text-gray-600">
            Select your preferred date and time from our available slots
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <FiCheck className="text-primary text-xs" />
              </div>
              <p className="text-sm text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>

        {/* Instructions Box */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-green-800">
            <strong>✅ Booking Active!</strong> Select your preferred date and time below. 
            Your appointment will be automatically added to our calendar and you'll receive a confirmation email with meeting details.
          </p>
        </div>

        {/* Calendly Embed Widget */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/katisatechnologies/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>

        {/* Alternative: Direct Contact */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Prefer to schedule via email? Contact us at{' '}
            <a href="mailto:katisatechnologies@gmail.com" className="text-primary hover:underline">
              katisatechnologies@gmail.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationBooking;
