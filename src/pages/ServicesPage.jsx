import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { FiCpu, FiCode, FiLayers, FiPackage, FiMessageSquare, FiCheckCircle, FiCreditCard } from 'react-icons/fi';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ServicesPage = () => {
  // Sample services data
  const services = [
    {
      id: 'websites',
      title: 'Business Websites',
      description: 'Professional websites designed to showcase your business and reach more customers online.',
      icon: FiCode,
      features: [
        'Responsive design for all devices',
        'Fast loading and SEO optimized',
        'Easy content management',
        'Contact forms and integrations',
        'Hosting and maintenance support'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
    },
    {
      id: 'idora-nfc',
      title: 'IDORA - NFC Smart Cards',
      description: 'Our flagship product: Smart NFC business cards that let you share your contact info in one tap. No app required.',
      icon: FiCreditCard,
      features: [
        'Instant contact sharing with one tap',
        'Works on all smartphones (iPhone & Android)',
        'Customizable digital profile page',
        'Update your details anytime online',
        'Perfect for networking and business'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'simple-apps',
      title: 'Simple Applications',
      description: 'Localhost and internal applications for specific business needs - from data entry to workflow management.',
      icon: FiLayers,
      features: [
        'Custom-built for your workflow',
        'Easy to use interface',
        'Can run on local network',
        'Data stays private and secure',
        'Training and documentation included'
      ],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'inventory',
      title: 'Inventory Management Systems',
      description: 'Track your stock, manage orders, and stay organized with simple inventory systems built for your business.',
      icon: FiPackage,
      features: [
        'Track stock levels in real-time',
        'Manage purchases and sales',
        'Generate reports and insights',
        'Low stock alerts',
        'Simple to learn and use'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'custom-solutions',
      title: 'Custom Solutions',
      description: 'Have a unique requirement? Let\'s discuss your needs and build something tailored just for you.',
      icon: FiMessageSquare,
      features: [
        'Free consultation to understand your needs',
        'Flexible scope and timeline',
        'Built exactly to your specifications',
        'Transparent pricing',
        'Ongoing support available'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services" 
        description="Katisa Technologies builds business websites, inventory systems, simple applications, and IDORA NFC smart cards. Custom solutions available." 
        keywords={['business websites', 'inventory management', 'NFC cards', 'IDORA', 'custom software', 'Sri Lanka']} 
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h1>
            <p className="text-xl mb-8">
              Simple, effective solutions for real businesses. From websites to inventory systems,
              we build tools that work for you.
            </p>
            <Button to="/contact" className="bg-white text-primary hover:bg-gray-100">
              Get a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Focused solutions that solve real problems. Whether you need a website, an inventory system,
              or something custom-built, we're here to help.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                title={service.title} 
                description={service.description} 
                icon={service.icon}
                link={service.id === 'idora-nfc' ? 'https://idora.netlify.app/' : null}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <Section 
          key={service.id} 
          id={service.id}
          bgColor={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={index % 2 === 1 ? 'md:order-2' : ''}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {service.id === 'idora-nfc' ? (
                <Button href="https://idora.netlify.app/" variant="primary">
                  Visit IDORA Website
                </Button>
              ) : (
                <Button to="/contact" variant="primary">
                  Request This Service
                </Button>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={index % 2 === 1 ? 'md:order-1' : ''}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section bgColor="bg-primary">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's talk about what you need. We offer free consultations to understand your requirements
              and suggest the best solution for your business.
            </p>
            <Button to="/contact" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;
