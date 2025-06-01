import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { FiTarget, FiEye, FiTrendingUp, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
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
      image: kalharaImage
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
      title: 'Education',
      description: 'We believe in empowering the next generation of tech professionals through mentorship.',
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
        description={formatMetaDescription("Learn about Katisa Technologies, a Sri Lankan tech startup specializing in AI-powered software development while nurturing local tech talent through our internship program.")} 
        keywords={combineKeywords(['about us', 'tech startup', 'Sri Lanka', 'company mission', 'AI development', 'team'])} 
        url="/about"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-secondary text-dark">
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
              We're a tech startup in Sri Lanka with a dual mission: delivering innovative AI solutions 
              while nurturing local tech talent through our internship program.
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
              Katisa Technologies was founded in 2020 with a vision to bridge two gaps: the growing demand for AI-powered 
              software solutions, and the need for practical experience among tech graduates in Sri Lanka.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Ashan Perera, recognized that while Sri Lanka produces talented tech graduates, many struggle 
              to find opportunities to apply their knowledge in real-world settings. At the same time, businesses worldwide 
              are seeking innovative AI solutions to stay competitive.
            </p>
            <p className="text-gray-600 mb-4">
              By creating a company that offers both professional AI development services and a structured internship program, 
              Katisa Technologies addresses both needs simultaneously – delivering cutting-edge solutions while nurturing the 
              next generation of tech professionals.
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
              To deliver innovative AI-powered solutions that help businesses thrive, while providing meaningful 
              learning opportunities for aspiring tech professionals in Sri Lanka through our internship program.
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
              To be recognized globally as a leading AI solutions provider from Sri Lanka, and to create a sustainable 
              model for tech education that bridges the gap between academic knowledge and industry requirements.
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
              to how we mentor our interns.
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
                <p className="text-gray-600">{member.bio}</p>
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
            <h2 className="text-3xl font-bold mb-6">Why We Focus on Sri Lanka</h2>
            <p className="text-gray-600 mb-4">
              Sri Lanka has a growing tech ecosystem with talented graduates from top universities. However, many face 
              a significant challenge: the lack of practical experience and mentorship opportunities.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that by providing structured internship experiences and real-world project exposure, we can help 
              bridge this gap and showcase Sri Lankan talent on the global stage.
            </p>
            <p className="text-gray-600 mb-4">
              Our goal is to contribute to the growth of Sri Lanka's tech industry by nurturing skilled professionals who 
              can drive innovation and attract international opportunities.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Future Goals Section */}
      <Section bgColor="bg-gradient-to-r from-primary to-secondary text-dark">
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
            <h3 className="text-xl font-bold mb-3">Scale Our Internship Program</h3>
            <p className="text-white/80">
              Increase the number of interns we can mentor each year and expand the program to include more 
              specialized tracks in emerging technologies.
            </p>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
          >
            <h3 className="text-xl font-bold mb-3">Global Partnerships</h3>
            <p className="text-white/80">
              Form partnerships with international tech companies and educational institutions to create more 
              opportunities for our interns and expand our service offerings.
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
            <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to hire us for your next project or join our team as an intern or employee, 
              we'd love to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
              <Button to="/internship" variant="outline">
                Explore Internships
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
