import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { FiArrowRight, FiTrendingUp, FiClock, FiCheckCircle } from 'react-icons/fi';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const PortfolioPage = () => {
  const [satisfactionRate, setSatisfactionRate] = useState('...');

  useEffect(() => {
    fetchSatisfactionRate();
  }, []);

  const fetchSatisfactionRate = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'feedback'));
      const ratings = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        ratings.push(data.rating);
      });

      if (ratings.length > 0) {
        // Calculate satisfaction rate (4 and 5 star ratings are considered satisfied)
        const satisfiedCount = ratings.filter(rating => rating >= 4).length;
        const percentage = Math.round((satisfiedCount / ratings.length) * 100);
        setSatisfactionRate(`${percentage}%`);
      } else {
        setSatisfactionRate('N/A');
      }
    } catch (error) {
      console.error('Error fetching satisfaction rate:', error);
      setSatisfactionRate('N/A');
    }
  };
  const caseStudies = [
    {
      id: 1,
      title: 'AI Chatbot for E-commerce Store',
      client: 'Online Fashion Retailer',
      industry: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      problem: 'High cart abandonment rate and customers needing 24/7 support for product queries',
      solution: 'Built custom AI chatbot with product recommendation engine and natural language processing',
      results: [
        '35% increase in sales conversions',
        '24/7 automated customer support',
        '40% reduction in support costs',
        '2-minute average response time'
      ],
      testimonial: '"The chatbot has transformed our customer service. We\'re getting more sales and our team can focus on complex issues."',
      testimonialAuthor: 'Pradeep Silva, Store Manager',
      tags: ['AI', 'Chatbot', 'E-commerce']
    },
    {
      id: 2,
      title: 'Business Automation System',
      client: 'Local Manufacturing Company',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      problem: 'Manual inventory tracking leading to stockouts and overstocking, costing thousands monthly',
      solution: 'Developed automated inventory management system with AI-powered demand forecasting',
      results: [
        '50% reduction in stockouts',
        '30% decrease in inventory costs',
        'Real-time inventory tracking',
        '5 hours saved per day on manual work'
      ],
      testimonial: '"This system paid for itself within 3 months. Our inventory management is now seamless and accurate."',
      testimonialAuthor: 'Dinesh Fernando, Operations Manager',
      tags: ['Automation', 'AI', 'Inventory Management']
    },
    {
      id: 3,
      title: 'MVP Website for Startup',
      client: 'Tech Startup',
      industry: 'SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80',
      problem: 'Needed to validate business idea quickly without spending months on development',
      solution: 'Built lean MVP website with core features and payment integration in 3 weeks',
      results: [
        'Launched in 3 weeks',
        '1,000+ signups in first 2 months',
        '€15,000 in revenue generated',
        'Validated product-market fit'
      ],
      testimonial: '"Katisa helped us launch fast and start generating revenue immediately. Their speed and quality exceeded expectations."',
      testimonialAuthor: 'Anjali Perera, Founder',
      tags: ['MVP', 'Web Development', 'Startup']
    },
    {
      id: 4,
      title: 'CRM & Marketing Automation',
      client: 'Insurance Agency',
      industry: 'Insurance & Financial Services',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      problem: 'Lost leads due to slow manual follow-up and disorganized customer data',
      solution: 'Implemented custom CRM with automated email sequences and lead scoring',
      results: [
        '45% increase in lead conversions',
        'Automated follow-up within 5 minutes',
        '60% time saved on admin tasks',
        'Organized database of 5,000+ contacts'
      ],
      testimonial: '"Our conversion rate doubled after implementing this system. No more lost leads!"',
      testimonialAuthor: 'Rohan Wickramasinghe, Sales Director',
      tags: ['CRM', 'Automation', 'Marketing']
    }
  ];

  return (
    <>
      <SEO 
        title="Portfolio - Client Success Stories" 
        description="See how Katisa Technologies helps businesses grow with AI solutions, automation, and custom software. Real results from real clients in Sri Lanka and beyond." 
        keywords={['portfolio', 'case studies', 'client results', 'success stories', 'AI solutions', 'Sri Lanka']} 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Projects. Real Results.
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              See how we've helped businesses increase revenue, save time, and grow with custom software solutions.
            </p>
            <Button to="/contact" variant="secondary" className="text-lg px-8 py-3">
              Start Your Success Story →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <Section>
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                <p className="text-gray-500 mb-4">
                  <span className="font-semibold">{study.client}</span> • {study.industry}
                </p>

                {/* Problem */}
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-700">The Challenge</h3>
                  <p className="text-gray-600">{study.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-700">Our Solution</h3>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-700 flex items-center gap-2">
                    <FiTrendingUp className="text-green-500" />
                    Results That Matter
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-gray-700 italic mb-2">"{study.testimonial}"</p>
                  <p className="text-sm text-gray-600 font-semibold">— {study.testimonialAuthor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section bgColor="bg-gradient-to-r from-primary to-accent">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '6+', label: 'Projects Delivered' },
              { number: '5+', label: 'Happy Clients' },
              { number: satisfactionRate, label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to See Similar Results?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="secondary" className="text-lg px-8 py-3">
                Get Your Free Strategy Call
              </Button>
              <Button to="/services" className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default PortfolioPage;
