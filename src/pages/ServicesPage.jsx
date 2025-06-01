import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { FiCpu, FiCode, FiLayers, FiUsers, FiCheckCircle } from 'react-icons/fi';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ServicesPage = () => {
  // Sample services data
  const services = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Development',
      description: 'Custom AI chatbots to enhance customer engagement and automate support.',
      icon: FiCpu,
      features: [
        'Natural language processing capabilities',
        'Integration with existing platforms',
        'Custom training for your business domain',
        'Analytics dashboard for performance tracking',
        '24/7 customer support automation'
      ],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'mvp-development',
      title: 'MVP Websites & Apps',
      description: 'Rapid development of minimum viable products to validate your business ideas.',
      icon: FiCode,
      features: [
        'Rapid prototyping and development',
        'User-centric design approach',
        'Essential features implementation',
        'Scalable architecture',
        'Post-launch support and iterations'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
    },
    {
      id: 'automation-tools',
      title: 'Automation & AI Tools',
      description: 'Streamline your business processes with custom automation solutions.',
      icon: FiLayers,
      features: [
        'Workflow automation',
        'Data processing and analysis',
        'Custom AI algorithms',
        'Integration with existing systems',
        'Performance monitoring and optimization'
      ],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'intern-prototypes',
      title: 'Intern-Led Product Prototypes',
      description: 'Innovative prototypes developed by our talented interns under expert guidance.',
      icon: FiUsers,
      features: [
        'Fresh perspectives and innovative ideas',
        'Cost-effective development',
        'Supervised by experienced mentors',
        'Regular progress updates',
        'Option to hire interns post-project'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore Katisa Technologies' AI-powered services including chatbot development, MVP websites & apps, automation tools, and intern-led product prototypes." 
        keywords={['AI chatbot', 'MVP development', 'automation tools', 'product prototypes', 'software services']} 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">
              We deliver AI-powered solutions that help businesses innovate and grow.
              Our services combine cutting-edge technology with practical implementation.
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
              Our comprehensive range of services is designed to meet your business needs,
              from AI-powered chatbots to full-scale application development.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                link={`#${service.id}`}
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
              
              <Button to="/contact" variant="primary">
                Request This Service
              </Button>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our AI-powered services can help your business grow.
              We offer free consultations to understand your needs.
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
