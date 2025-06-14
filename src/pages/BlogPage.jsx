import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { FiSearch, FiCalendar, FiUser, FiTag } from 'react-icons/fi';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import BlogPreview from '../components/ui/BlogPreview';

const BlogPage = () => {
  // Sample blog posts data - in a real app, this would come from an API
  const allBlogPosts = [
    {
      id: 1,
      title: 'Building Real-World Solutions: The Katisa Approach to Software Development',
      excerpt: 'At Katisa Technologies, we focus on designing and delivering experience-driven software solutions that solve meaningful problems. Learn about our approach to building lean MVPs and intelligent systems.',
      slug: 'katisa-approach-software-development',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'June 11, 2025',
      author: 'Kalhara Thabrew',
      category: 'Development Philosophy'
    },
    {
      id: 2,
      title: 'How Our Collaborative Model Creates Opportunities for Students and Early Professionals',
      excerpt: 'Discover how Katisa Technologies collaborates with students and early professionals to work on live, real-use case projects while building valuable experience and making an impact.',
      slug: 'collaborative-model-opportunities',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'June 11, 2025',
      author: 'Kalhara Thabrew',
      category: 'Collaboration'
    },
    {
      id: 3,
      title: 'Case Study: Building an Intelligent System That Solves Real Problems',
      excerpt: 'Learn how we developed a practical AI solution that addressed a meaningful problem for our client, combining rapid prototyping with user-centered design principles.',
      slug: 'intelligent-system-case-study',
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'June 11, 2025',
      author: 'Kalhara Thabrew',
      category: 'Case Study'
    },
    {
      id: 4,
      title: 'Why We Value Real-World Experience Over Textbook Theory',
      excerpt: 'At Katisa Technologies, we prioritize practical experience over theoretical knowledge. Explore how this philosophy shapes our approach to software development and team building.',
      slug: 'real-world-experience-value',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'June 11, 2025',
      author: 'Kalhara Thabrew',
      category: 'Company Values'
    },
    {
      id: 5,
      title: 'Building a Culture of Creators: The Katisa Way',
      excerpt: 'Discover how we are fostering a culture of creators who move fast, break monotony, and solve problems that others ignore. Our approach to building innovative solutions with purpose.',
      slug: 'culture-of-creators',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'June 11, 2025',
      author: 'Kalhara Thabrew',
      category: 'Company Culture'
    },
    {
      id: 6,
      title: 'The Design-Development-Delivery Loop: Our Project Methodology',
      excerpt: 'Learn about Katisa Technologies integrated approach to projects, where design, development, and delivery form a continuous loop focused on solving what matters.',
      slug: 'design-development-delivery',
      image: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'June 11, 2025',
      author: 'Kalhara Thabrew',
      category: 'Methodology'
    }
  ];

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories
  const categories = ['All', ...new Set(allBlogPosts.map(post => post.category))];

  // Filter posts based on search term and category
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="Blog" 
        description="Explore Katisa Technologies' blog for insights on AI, software development, tech industry trends, and internship experiences." 
        keywords={['tech blog', 'AI insights', 'software development', 'tech industry', 'internship stories']} 
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl mb-8">
              Insights, news, and stories from the world of AI and technology.
              Stay updated with the latest trends and learn from our experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <Section>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          {/* Search */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="w-full md:w-auto flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  (category === 'All' && selectedCategory === '') || selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <BlogPreview posts={filteredPosts} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </Section>

      {/* Featured Article */}
      <Section bgColor="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-primary font-semibold mb-2">FEATURED ARTICLE</div>
            <h2 className="text-3xl font-bold mb-4">Building Real-World Solutions: The Katisa Approach</h2>
            <p className="text-gray-600 mb-6">
              At Katisa Technologies, we focus on designing and delivering experience-driven software solutions that solve meaningful problems. Learn about our approach to building lean MVPs and intelligent systems.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center mr-4">
                <FiCalendar className="mr-1" />
                <span>June 11, 2025</span>
              </div>
              <div className="flex items-center mr-4">
                <FiUser className="mr-1" />
                <span>Kalhara Thabrew</span>
              </div>
              <div className="flex items-center">
                <FiTag className="mr-1" />
                <span>Development Philosophy</span>
              </div>
            </div>
            <Button to="/blog/ai-business-trends-2025" variant="primary">
              Read Full Article
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="AI Business Trends"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section>
        <div className="bg-primary rounded-xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4">
                Get the latest articles, insights, and news from Katisa Technologies delivered directly to your inbox.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="whitespace-nowrap bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm opacity-80 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogPage;
