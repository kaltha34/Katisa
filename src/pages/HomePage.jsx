import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiUsers } from 'react-icons/fi';

// Import logo image
import logoImage from '../assets/images/Logo.png';

import SEO from '../components/ui/SEO';
import NewsletterSubscribe from '../components/ui/NewsletterSubscribe';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import BlogPreview from '../components/ui/BlogPreview';

const HomePage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2025',
      excerpt: 'Artificial intelligence is rapidly transforming how businesses operate. In this article, we explore the key AI trends that will shape the business landscape in 2025 and beyond.',
      slug: 'ai-business-trends-2025',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'May 28, 2025',
      author: 'Dinesh Perera'
    },
    {
      id: 2,
      title: 'How Our Internship Program is Shaping Tech Talent in Sri Lanka',
      excerpt: 'At Katisa Technologies, we believe in nurturing local talent. Learn how our internship program is helping to build the next generation of tech professionals in Sri Lanka.',
      slug: 'internship-program-impact',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'May 15, 2025',
      author: 'Amali Fernando'
    },
    {
      id: 3,
      title: 'Case Study: How We Built an AI Chatbot that Increased Sales by 35%',
      excerpt: 'Discover how we helped a leading e-commerce company implement an AI chatbot solution that significantly improved customer engagement and boosted sales.',
      slug: 'ai-chatbot-case-study',
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'May 5, 2025',
      author: 'Rajiv Mendis'
    }
  ];
  
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
    },
    {
      title: 'Intern-Led Product Prototypes',
      description: 'Innovative prototypes developed by our talented interns under expert guidance.',
      icon: FiUsers,
      link: '/services'
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      quote: "Katisa Technologies helped us implement an AI chatbot that reduced our customer service response time by 60%. Their team was professional and delivered on time.",
      name: "Sarah Johnson",
      title: "CTO, TechSolutions Ltd"
    },
    {
      quote: "The internship program at Katisa was a game-changer for my career. I gained hands-on experience with cutting-edge AI technologies and received excellent mentorship.",
      name: "Raj Patel",
      title: "Former Intern, now AI Engineer"
    },
    {
      quote: "We needed an MVP for our startup quickly, and Katisa delivered a high-quality product within our tight deadline. Their expertise in AI integration gave us a competitive edge.",
      name: "Michael Chen",
      title: "Founder, InnovateSL"
    }
  ];

  return (
    <>
      <SEO 
        title="Home" 
        description="Katisa Technologies builds AI-powered software solutions while providing real-world experience to aspiring tech professionals in Sri Lanka." 
        keywords={['AI', 'software development', 'internship', 'Sri Lanka', 'chatbot', 'MVP']} 
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block"
              >
                Empowering Interns.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="block text-white bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
              >
                Delivering Innovation.
              </motion.span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We build AI-powered software solutions while providing real-world experience to aspiring tech professionals in Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button to="/contact" variant="primary" className="text-lg px-8 py-3 bg-white text-primary hover:bg-accent hover:text-white transition-all duration-300 shadow-lg">
                  Hire Us
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button to="/internship" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary transition-all duration-300">
                  Join as Intern
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
              What makes us unique is our dual mission: delivering exceptional software while nurturing the next generation 
              of tech professionals through our comprehensive internship program.
            </p>
            <Button to="/about" variant="outline">
              Learn More About Us
            </Button>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
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

      {/* Services Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of AI-powered services to help businesses innovate and grow.
              Our solutions are built with cutting-edge technology and a focus on delivering value.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
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

      {/* Testimonials Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients and interns have to say about their experience with Katisa Technologies.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <TestimonialSlider testimonials={testimonials} />
          </motion.div>
        </div>
      </Section>

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

      {/* CTA Section */}
      <Section bgColor="bg-primary">
        <div className="text-center text-white">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Innovate with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're looking to hire us for your next project or join our internship program,
              we're excited to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="secondary" className="text-lg px-8 py-3">
                Get in Touch
              </Button>
              <Button to="/internship" className="text-lg px-8 py-3 bg-white text-primary hover:bg-gray-100">
                Explore Internships
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <NewsletterSubscribe />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
