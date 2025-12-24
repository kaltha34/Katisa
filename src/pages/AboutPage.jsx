import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { FiTarget, FiEye, FiTrendingUp, FiUsers, FiAward, FiGlobe, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { formatMetaDescription, combineKeywords } from '../utils/seo';

// Import images directly
import kalharaImage from '../assets/images/Kalhara thabrew.jpeg';
import logoImage from '../assets/images/Logo.png';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Kalhara Thabrew',
      title: 'Founder & CEO',
      bio: 'Visionary tech entrepreneur with 10+ years of experience in AI and software development, leading Katisa Technologies into the future.',
      image: kalharaImage,
      socials: {
        instagram: 'https://www.instagram.com/kali_x_sa/',
        linkedin: 'https://www.linkedin.com/in/kalhara-thabrew-288565258/'
      }
    }
  ];

  // Sample company values
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of whats possible with AI and technology.',
      icon: FiTrendingUp
    },
    {
      title: 'Quality',
      description: 'We deliver high-quality solutions with attention to detail and commitment to excellence.',
      icon: FiUsers
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client service.',
      icon: FiAward
    },
    {
      title: 'Global Impact',
      description: 'We aim to showcase Sri Lankan talent on the global stage and make a positive impact.',
      icon: FiGlobe
    }
  ];

  return (
    <>
      <SEO 
        title="About Us" 
        description={formatMetaDescription("Learn about Katisa Technologies, a Sri Lankan tech startup specializing in AI-powered software development and delivering innovative solutions to businesses worldwide.")} 
        keywords={combineKeywords(['about us', 'tech startup', 'Sri Lanka', 'company mission', 'AI development', 'team'])} 
        url="/about"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
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
            <div className="flex items-center mb-6">
              <img src={logoImage} alt="Katisa Technologies Logo" className="h-16 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            </div>
            <p className="text-xl mb-8">
              We're a tech startup in Sri Lanka delivering innovative AI solutions and building cutting-edge software for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Katisa Technologies was founded in 2020 with a vision to deliver cutting-edge AI-powered 
              software solutions to businesses worldwide from our base in Sri Lanka.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Kalhara Thabrew, recognized the growing demand for innovative AI solutions and saw an 
              opportunity to showcase Sri Lankan talent on the global stage. With over 10 years of experience in 
              software development and AI, he set out to build a company that delivers exceptional results.
            </p>
            <p className="text-gray-600 mb-4">
              Today, Katisa Technologies specializes in developing AI chatbots, MVPs, and custom automation tools 
              that help businesses streamline operations, enhance customer experiences, and drive growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision Section */}
      <Section bgColor="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <div className="flex items-center mb-6">
              <div className="text-primary mr-4">
                <FiTarget size={40} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To deliver innovative AI-powered solutions that help businesses thrive in an increasingly 
              digital world, while showcasing the talent and capabilities of Sri Lankan tech professionals.
            </p>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <div className="flex items-center mb-6">
              <div className="text-primary mr-4">
                <FiEye size={40} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be recognized globally as a leading AI solutions provider from Sri Lanka, delivering world-class 
              software that drives innovation and showcases the exceptional talent of our tech community.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Our Values Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Katisa Technologies, from how we develop software 
              to how we serve our clients.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          {...staggerContainer(0.1)}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">
                <value.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Our Team Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts is passionate about technology, education, and making a positive impact.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          {...staggerContainer(0.1)}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                {/* Social Media Links */}
                {member.socials && (
                  <div className="flex gap-3 pt-3 border-t border-gray-200">
                    {member.socials.instagram && (
                      <a 
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                        aria-label="Instagram"
                      >
                        <FiInstagram size={20} />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Sri Lanka Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1546942113-a6c43b63104a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Sri Lanka" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Sri Lanka</h2>
            <p className="text-gray-600 mb-4">
              Sri Lanka has a rapidly growing tech ecosystem with talented professionals and a strong educational foundation. 
              The country's strategic location and time zone make it ideal for serving global clients.
            </p>
            <p className="text-gray-600 mb-4">
              By operating from Sri Lanka, we can deliver world-class solutions while maintaining competitive pricing and 
              providing exceptional value to our clients. Our team brings together local talent with global expertise.
            </p>
            <p className="text-gray-600 mb-4">
              We're proud to showcase Sri Lankan innovation on the global stage and contribute to the growth of the 
              country's technology sector.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Future Goals Section */}
      <Section bgColor="bg-gradient-to-r from-primary to-accent text-white">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Future Goals</h2>
            <p className="max-w-2xl mx-auto">
              We have ambitious plans for the future of Katisa Technologies and our impact on the tech ecosystem.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          {...staggerContainer(0.1)}
          className="grid md:grid-cols-3 gap-6">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
          >
            <h3 className="text-xl font-bold mb-3">Expand Our AI Solutions</h3>
            <p className="text-white/80">
              Develop more specialized AI solutions for industries like healthcare, finance, and education, 
              leveraging cutting-edge technologies to solve complex problems.
            </p>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
          >
            <h3 className="text-xl font-bold mb-3">Grow Our Team</h3>
            <p className="text-white/80">
              Expand our team of talented developers and AI specialists to take on more ambitious projects 
              and deliver even greater value to our clients.
            </p>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
          >
            <h3 className="text-xl font-bold mb-3">Global Partnerships</h3>
            <p className="text-white/80">
              Form partnerships with international tech companies and clients to expand our service offerings 
              and bring more innovative AI solutions to market.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to hire us for your next project or want to join our growing team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
              <Button to="/services" variant="outline">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
