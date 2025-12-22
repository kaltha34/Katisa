import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import Section from '../components/ui/Section';
import ConsultationBooking from '../components/ui/ConsultationBooking';
import { FiCheck } from 'react-icons/fi';

const BookConsultationPage = () => {
  const benefits = [
    'Free 30-minute consultation',
    'Discuss your project requirements',
    'Get expert advice on AI solutions',
    'Receive a project estimate',
    'No obligation or commitment required'
  ];

  return (
    <>
      <SEO 
        title="Book a Consultation" 
        description="Schedule a free consultation with Katisa Technologies to discuss your AI and software development needs." 
        keywords={['consultation', 'booking', 'schedule', 'meeting', 'AI consultation']} 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl opacity-90">
              Book a free consultation to explore how we can help transform your business with AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
            <p className="text-gray-600">
              Our consultation process is designed to understand your needs and provide valuable insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <FiCheck className="text-primary" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Booking Form Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ConsultationBooking />
        </div>
      </Section>

      {/* Additional Info Section */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              If you need immediate assistance or have questions about our services, 
              feel free to reach out to us directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="mailto:katisatechnologies@gmail.com" className="text-primary hover:underline">
                katisatechnologies@gmail.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+94725950375" className="text-primary hover:underline">
                +94 72 595 0375
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default BookConsultationPage;
