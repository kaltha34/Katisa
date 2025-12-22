import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">KatisaTech</h3>
            <p className="mb-6 text-gray-300 font-light">Building tomorrow's AI solutions today.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/katisatech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-primary transition-colors transform hover:scale-110 duration-300 bg-white/10 p-3 rounded-full hover:bg-white/20">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-cyan transition-colors transform hover:scale-110 duration-300 bg-white/10 p-3 rounded-full hover:bg-white/20">
                <FiTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-secondary transition-colors transform hover:scale-110 duration-300 bg-white/10 p-3 rounded-full hover:bg-white/20">
                <FiFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-pink transition-colors transform hover:scale-110 duration-300 bg-white/10 p-3 rounded-full hover:bg-white/20">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors hover:translate-x-2 inline-block duration-300">→ Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-2 inline-block duration-300">→ Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors hover:translate-x-2 inline-block duration-300">→ About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink transition-colors hover:translate-x-2 inline-block duration-300">→ Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors hover:translate-x-2 inline-block duration-300">→ AI Chatbot Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors hover:translate-x-2 inline-block duration-300">→ MVP Websites & Apps</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors hover:translate-x-2 inline-block duration-300">→ Automation & AI Tools</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pink transition-colors hover:translate-x-2 inline-block duration-300">→ Custom AI Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <FiMapPin className="mr-3 mt-1 text-primary group-hover:text-accent transition-colors" />
                <div>
                  <span className="text-gray-300">Colombo, Sri Lanka</span>
                  <a href="https://maps.app.goo.gl/5Pj3XuAYiydTurCA9" target="_blank" rel="noopener noreferrer" className="block text-xs text-gray-400 hover:text-primary transition-colors">View Map →</a>
                </div>
              </li>
              <li className="flex items-center group">
                <FiPhone className="mr-3 text-secondary group-hover:text-accent transition-colors" />
                <span className="text-gray-300">+94 72 595 0375</span>
              </li>
              <li className="flex items-center group">
                <FiMail className="mr-3 text-accent group-hover:text-pink transition-colors" />
                <span className="text-gray-300">katisatechnologies@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Katisa Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
