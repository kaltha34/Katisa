import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { validateField, isValidEmail, isValidPhone, isNotEmpty } from '../utils/validation';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    // Validate name
    const nameValidation = validateField('Name', formData.name, { required: true, minLength: 2 });
    if (!nameValidation.isValid) errors.name = nameValidation.errorMessage;
    
    // Validate email
    const emailValidation = validateField('Email', formData.email, { required: true, email: true });
    if (!emailValidation.isValid) errors.email = emailValidation.errorMessage;
    
    // Validate phone (optional)
    if (formData.phone) {
      const phoneValidation = validateField('Phone', formData.phone, { phone: true });
      if (!phoneValidation.isValid) errors.phone = phoneValidation.errorMessage;
    }
    
    // Validate subject
    const subjectValidation = validateField('Subject', formData.subject, { required: true });
    if (!subjectValidation.isValid) errors.subject = subjectValidation.errorMessage;
    
    // Validate message
    const messageValidation = validateField('Message', formData.message, { required: true, minLength: 10 });
    if (!messageValidation.isValid) errors.message = messageValidation.errorMessage;
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Get the form element
      const form = e.target;
      
      // For FormSubmit to work properly, we'll use their standard form submission
      // but intercept it to show our custom UI
      
      // Create a hidden iframe to handle the form submission
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-form-submit-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Set the form target to the iframe
      form.target = 'hidden-form-submit-iframe';
      
      // Handle iframe load event to detect submission completion
      iframe.onload = () => {
        // Submission completed
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setSubmitError(false);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
        
        // Clean up iframe
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      };
      
      // Handle errors
      iframe.onerror = () => {
        setIsSubmitting(false);
        setSubmitError(true);
        setSubmitSuccess(false);
        
        // Clean up iframe
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      };
      
      // Submit the form
      form.submit();
    }
  };
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Katisa Technologies for AI-powered software development, internship opportunities, or to discuss how we can help your business grow." 
        keywords={['contact', 'get in touch', 'Sri Lanka tech company', 'software development inquiry', 'internship application']} 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl mb-8">
              Have a question or interested in our services? We'd love to hear from you.
              Fill out the form below or reach out directly through our contact information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit} action="https://formsubmit.co/katisatechnologies@gmail.com" method="POST" encType="multipart/form-data">
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-md mb-4"
                >
                  Your message has been sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              
              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 text-red-700 rounded-md mb-4"
                >
                  There was an error sending your message. Please try again later.
                </motion.div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`} 
                  required
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`} 
                  required
                />
                {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`} 
                />
                {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${formErrors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-primary focus:border-primary`} 
                  required
                />
                {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                  required
                ></textarea>
                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
              </div>
              
              {/* Hidden FormSubmit fields */}
              <input type="hidden" name="_subject" value="New contact form submission from Katisa website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_replyto" value={formData.email} />
              <input type="hidden" name="_honey" value="" />
              <input type="hidden" name="_next" value="#" />
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to us directly using the contact information below.
              We aim to respond to all inquiries within 24 hours during business days.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Location</h3>
                  <p className="text-gray-600">Colombo, Sri Lanka</p>
                  <a href="https://maps.app.goo.gl/5Pj3XuAYiydTurCA9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">View on Google Maps →</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-600">katisatechnologies@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-gray-600">+94 72 595 0375</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/katisatech/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-primary hover:text-white p-3 rounded-full transition-colors">
                <FiInstagram size={24} />
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section bgColor="bg-gray-50" className="pb-0">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're located in the heart of Colombo, Sri Lanka. Feel free to visit us during business hours.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-96 w-full rounded-t-xl overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.87033597524988!2d79.86182257573845!3d6.927078199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259692f4bb2c5%3A0xd3e6c5c8e38e6e05!2sKatisa%20Technologies!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Katisa Technologies Location"
          ></iframe>
        </motion.div>
      </Section>

      {/* Feedback Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Share Your Ideas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We value your input! Share your ideas for collaboration or feedback on how we can work together.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FeedbackForm />
        </motion.div>
      </Section>
      
      {/* FAQ Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and internship program.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
              <p className="text-gray-600">
                We specialize in AI chatbot development, MVP websites and apps, automation tools, and intern-led product prototypes. Our focus is on delivering innovative AI-powered solutions tailored to your business needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">How can I apply for the internship program?</h3>
              <p className="text-gray-600">
                You can apply for our internship program by visiting the Internship page on our website and filling out the application form. We review applications on a rolling basis and will contact you if your profile matches our current needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">Do you work with international clients?</h3>
              <p className="text-gray-600">
                Yes, we work with clients from around the world. Our team is experienced in remote collaboration and we use modern tools to ensure smooth communication and project management regardless of location.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">What is your typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on the scope and complexity. A simple MVP might take 4-6 weeks, while more complex AI solutions could take 2-3 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

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
              Contact us today to discuss your project requirements or learn more about our internship program.
              We're excited to hear from you!
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
