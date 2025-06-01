import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Katisa<span className="text-accent">Tech</span></h3>
            <p className="mb-4 text-gray-300">Empowering interns. Delivering innovation.</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-accent transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-accent transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-accent transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-accent transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/internship" className="text-gray-300 hover:text-accent transition-colors">Internship Program</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">AI Chatbot Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">MVP Websites & Apps</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Automation & AI Tools</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Intern-Led Product Prototypes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mr-3 mt-1 text-accent" />
                <span className="text-gray-300">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-accent" />
                <span className="text-gray-300">+94 123 456 789</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-accent" />
                <span className="text-gray-300">info@katisatech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300">Stay updated with our latest news and offers</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-dark"
                />
                <button 
                  type="submit" 
                  className="bg-accent hover:bg-indigo-600 px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Katisa Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
