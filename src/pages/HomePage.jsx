import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiPackage, FiMessageSquare, FiCheckCircle, FiUsers, FiAward, FiClock } from 'react-icons/fi';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

// Import logo and founder image
import logoImage from '../assets/images/Logo.png';
import idoraLogo from '../assets/images/Idora.png';
import founderImage from '../assets/images/Kalhara thabrew.jpeg';

import SEO from '../components/ui/SEO';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FeedbackForm from '../components/feedback/FeedbackForm';
import FeedbackDisplay from '../components/feedback/FeedbackDisplay';

const HomePage = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [happyClientsCount, setHappyClientsCount] = useState('...');
  
  useEffect(() => {
    fetchHappyClientsCount();
  }, []);

  const fetchHappyClientsCount = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      const ratings = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        ratings.push(data.rating);
      });

      if (ratings.length > 0) {
        // Count satisfied clients (4 and 5 star ratings)
        const satisfiedCount = ratings.filter(rating => rating >= 4).length;
        setHappyClientsCount(satisfiedCount);
      } else {
        setHappyClientsCount(0);
      }
    } catch (error) {
      console.error('Error fetching happy clients count:', error);
      setHappyClientsCount('N/A');
    }
  };

  // Sample services data
  const services = [
    {
      title: 'Business Websites',
      description: 'Professional websites tailored to your business needs, from simple portfolios to full-featured company sites.',
      icon: FiCode,
      link: '/services'
    },
    {
      title: 'IDORA - NFC Smart Cards',
      description: 'Our flagship product: Smart NFC business cards for instant contact sharing. Tap once to share everything.',
      icon: FiCpu,
      link: 'https://idora.netlify.app/'
    },
    {
      title: 'Inventory Management',
      description: 'Simple, effective inventory tracking systems designed for small businesses and local operations.',
      icon: FiPackage,
      link: '/services'
    },
    {
      title: 'Custom Solutions',
      description: 'Have a unique requirement? Let\'s talk and build a solution that perfectly matches your needs.',
      icon: FiMessageSquare,
      link: '/services'
    }
  ];

  return (
    <>
      <SEO 
        title="Home" 
        description="Katisa Technologies builds websites, inventory systems, simple applications, and IDORA NFC smart cards for businesses in Sri Lanka." 
        keywords={['business websites', 'inventory management', 'NFC cards', 'IDORA', 'software development', 'Sri Lanka']} 
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 z-10 opacity-95"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-10 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 flex items-center gap-6"
            >
              <img src={logoImage} alt="Katisa Technologies Logo" style={{ height: '200px', width: 'auto' }} />
              <img src={idoraLogo} alt="IDORA Logo" style={{ height: '180px', width: 'auto' }} />
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block"
              >
                Building Solutions
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="block bg-gradient-to-r from-accent via-white to-cyan bg-clip-text text-transparent animate-gradient"
              >
                For Your Business
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed font-light">
              We build websites, inventory systems, and smart tools that help businesses in Sri Lanka grow and succeed.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button to="/contact" variant="primary" className="text-lg px-8 py-3 font-bold shadow-xl border-2 border-white">
                  Get Started →
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button to="/services" variant="outline" className="text-lg px-8 py-3 text-white border-white border-2 hover:bg-white hover:text-primary font-bold backdrop-blur-sm bg-white/10">
                  Explore Services
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-secondary mb-2">6+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-accent mb-2">{happyClientsCount}+</div>
            <div className="text-gray-600">Happy Clients</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </motion.div>
        </div>
      </Section>

      {/* Founder & About Section */}
      <Section bgColor="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={founderImage} 
                  alt="Kalhara Thabrew - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Kalhara Thabrew</p>
                <p className="text-sm">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-bold mb-6">Built on Trust & Expertise</h2>
            <p className="text-gray-600 mb-6">
              Founded and led by <span className="font-semibold text-primary">Kalhara Thabrew</span>, Katisa Technologies 
              is a trusted partner for businesses in Sri Lanka looking to digitize their operations. With over 3 years of 
              experience in software development, we understand what businesses need.
            </p>
            <p className="text-gray-600 mb-6">
              We don't just build software—we build solutions that work. From simple business websites to custom inventory 
              systems and our innovative IDORA NFC smart cards, every project is delivered with attention to detail and 
              commitment to quality.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <FiCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Proven Track Record</p>
                  <p className="text-gray-600 text-sm">6+ successful projects delivered to satisfied clients</p>
                </div>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Local Expertise</p>
                  <p className="text-gray-600 text-sm">Based in Sri Lanka, we understand local business needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Transparent Process</p>
                  <p className="text-gray-600 text-sm">Clear communication and honest pricing, always</p>
                </div>
              </div>
            </div>
            
            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Katisa Technologies?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just another software company. Here's what makes us different.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-primary mb-4">
              <FiAward size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Every project is built with care and tested thoroughly. We stand behind our work with ongoing support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-secondary mb-4">
              <FiClock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
            <p className="text-gray-600">
              We respect your time and deadlines. Projects are delivered on schedule, without compromising quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-accent mb-4">
              <FiUsers size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3">Personal Support</h3>
            <p className="text-gray-600">
              You're not just a ticket number. Get direct access to our team for support and updates.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section bgColor="bg-white">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">What We Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Focused solutions for real businesses. We build websites, simple applications, and smart systems that work.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card {...service} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Client Feedback Section */}
      <Section bgColor="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Real feedback from real clients. See what businesses say about working with us.
            </p>
          </motion.div>
          <FeedbackDisplay />
        </div>

        <div className="max-w-2xl mx-auto text-center mt-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setShowFeedbackForm(true)}
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            ✍️ Share Your Feedback
          </motion.button>
        </div>

        {/* Feedback Form Modal Popup */}
        {showFeedbackForm && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowFeedbackForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFeedbackForm(false)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
              <FeedbackForm onSuccess={() => setShowFeedbackForm(false)} />
            </motion.div>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-primary">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Build Something?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you need a website, an inventory system, or IDORA cards for your team,
              let's discuss how we can help your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="secondary" className="text-lg px-8 py-3">
                Get in Touch
              </Button>
              <Button to="/about" className="text-lg px-8 py-3 bg-white text-primary hover:bg-gray-100">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
