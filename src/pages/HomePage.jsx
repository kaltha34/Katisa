import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiPackage, FiMessageSquare } from 'react-icons/fi';

// Import logo image
import logoImage from '../assets/images/Logo.png';

import SEO from '../components/ui/SEO';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage = () => {
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
      link: '/services'
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
              className="mb-4"
            >
              <img src={logoImage} alt="Katisa Technologies Logo" style={{ height: '200px', width: 'auto' }} />
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

      {/* About Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-bold mb-6">About Katisa Technologies</h2>
            <p className="text-gray-600 mb-6">
              Katisa Technologies is a tech startup based in Sri Lanka, focused on building practical software solutions for businesses. 
              We create websites, inventory systems, simple applications, and our flagship product IDORA - smart NFC business cards.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to help businesses digitize their operations with simple, effective tools that work. 
              Whether you need a website, a custom application, or IDORA cards for your team, we're here to build it.
            </p>
            <Button to="/about" variant="outline">
              Learn More About Us
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">5+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Interactive Code Playground Section */}
      <Section bgColor="bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Try Our Code Playground</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience our technical expertise firsthand. Modify the code below and see the results in real-time.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section bgColor="bg-gray-50">
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
