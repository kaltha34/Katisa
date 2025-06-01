import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';

const BlogPreview = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Blog Image */}
          <div className="h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Blog Content */}
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <div className="flex items-center mr-4">
                <FiCalendar className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FiUser className="mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">{post.title}</h3>
            
            {/* Excerpt */}
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            
            {/* Read More Link */}
            <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
              Read More <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogPreview;
