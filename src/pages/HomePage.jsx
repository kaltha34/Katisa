import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi';

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
      title: 'AI Chatbot Development',
      description: 'Custom AI chatbots to enhance customer engagement and automate support.',
      icon: FiCpu,
      link: '/services'
    },
    {
      title: 'MVP Websites & Apps',
      description: 'Rapid development of minimum viable products to validate your business ideas.',
      icon: FiCode,
      link: '/services'
    },
    {
      title: 'Automation & AI Tools',
      description: 'Streamline your business processes with custom automation solutions.',
      icon: FiLayers,
      link: '/services'
    }
  ];

  return (
    <>
      <SEO 
        title="Home" 
        description="Katisa Technologies builds AI-powered software solutions for businesses in Sri Lanka and beyond." 
        keywords={['AI', 'software development', 'Sri Lanka', 'chatbot', 'MVP']} 
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
              className="mb-8"
            >
              <img src={logoImage} alt="Katisa Technologies Logo" style={{ height: '350px', width: 'auto' }} />
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block"
              >
                Building Tomorrow's
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="block bg-gradient-to-r from-accent via-white to-cyan bg-clip-text text-transparent animate-gradient"
              >
                AI Solutions Today
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed font-light">
              We build AI-powered software solutions that help businesses innovate and grow in Sri Lanka and beyond.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button to="/contact" variant="primary" className="text-lg px-10 py-4 font-bold shadow-xl border-2 border-white">
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
<<<<<<< HEAD
                <Button to="/services" variant="outline" className="text-lg px-10 py-4 text-white border-white border-2 hover:bg-white hover:text-primary font-bold backdrop-blur-sm bg-white/10">
                  Explore Services
=======
                <Button to="/internship" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary transition-all duration-300">
                  Join as Intern
>>>>>>> origin/master
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
              Katisa Technologies is a tech startup based in Sri Lanka, specializing in AI-powered software development. 
              We combine cutting-edge technology with local talent to deliver innovative solutions to businesses worldwide.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to help businesses leverage the power of artificial intelligence to improve their operations, 
              enhance customer experiences, and drive growth.
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
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <CodePlayground />
        </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of AI-powered services to help businesses innovate and grow.
              Our solutions are built with cutting-edge technology and a focus on delivering value.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
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

<<<<<<< HEAD
=======
      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* Blog Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest insights, case studies, and news from Katisa Technologies.
            </p>
          </motion.div>
        </div>
        
        <BlogPreview posts={blogPosts} />
        
        <div className="text-center mt-12">
          <Button to="/blog" variant="outline">
            View All Articles
          </Button>
        </div>
      </Section>

>>>>>>> origin/master
      {/* CTA Section */}
      <Section bgColor="bg-primary">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Innovate with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with AI-powered solutions.
              Get in touch with us today to start your project.
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
