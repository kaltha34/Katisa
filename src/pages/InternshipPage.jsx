import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { FiCode, FiCpu, FiLayout, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Testimonial from '../components/ui/Testimonial';

const InternshipPage = () => {
  // Sample internship programs
  const programs = [
    {
      title: 'Web Development',
      description: 'Learn modern web development technologies and build real-world projects.',
      icon: FiCode,
      skills: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'Responsive Design']
    },
    {
      title: 'AI Tools Development',
      description: 'Develop AI-powered tools and gain experience with machine learning technologies.',
      icon: FiCpu,
      skills: ['Python', 'TensorFlow', 'Natural Language Processing', 'Data Analysis', 'API Integration']
    },
    {
      title: 'UI/UX Design',
      description: 'Create beautiful, user-friendly interfaces and improve user experience.',
      icon: FiLayout,
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems']
    }
  ];

  // Sample internship process steps
  const steps = [
    {
      title: 'Apply',
      description: 'Submit your application with your resume and portfolio (if available).',
      icon: '01'
    },
    {
      title: 'Project Assignment',
      description: 'Get assigned to a real-world project based on your skills and interests.',
      icon: '02'
    },
    {
      title: 'Build & Learn',
      description: 'Work on your project with guidance from experienced mentors.',
      icon: '03'
    },
    {
      title: 'Certification',
      description: 'Receive a certificate of completion and a recommendation letter.',
      icon: '04'
    }
  ];

  // Sample testimonials from past interns
  const testimonials = [
    {
      quote: "The internship at Katisa Technologies was a game-changer for my career. I worked on real AI projects and received excellent mentorship that helped me land a full-time role.",
      name: "Priya Sharma",
      title: "Former Intern, now Junior AI Developer"
    },
    {
      quote: "I joined Katisa as a web development intern with basic skills, and left with the confidence to build full-stack applications. The hands-on experience was invaluable.",
      name: "Amal Fernando",
      title: "Web Developer"
    },
    {
      quote: "The UI/UX internship program taught me not just design tools, but how to think like a designer. The feedback from senior designers helped me grow tremendously.",
      name: "Tharushi Perera",
      title: "UI/UX Designer"
    }
  ];

  return (
    <>
      <SEO 
        title="Internship Program" 
        description="Join Katisa Technologies' internship program to gain hands-on experience in web development, AI tools, UI/UX design, and more while working on real-world projects." 
        keywords={['internship', 'tech internship', 'Sri Lanka', 'web development', 'AI tools', 'UI/UX design']} 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gain Real-World Experience in Tech & AI</h1>
            <p className="text-xl mb-8">
              Our internship program offers hands-on experience working on real projects,
              mentorship from industry professionals, and valuable skills for your career.
            </p>
            <Button to="#apply" className="bg-white text-primary hover:bg-gray-100">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Join Our Internship Program?</h2>
            <p className="text-gray-600 mb-6">
              Our program is designed to bridge the gap between academic knowledge and industry requirements.
              We focus on practical skills development through real project experience.
            </p>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 text-primary">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Hands-on Learning</h3>
                  <p className="text-gray-600">Work on real projects for actual clients, not simulated exercises.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-primary">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Professional Mentorship</h3>
                  <p className="text-gray-600">Receive guidance from experienced professionals in your field.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-primary">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Portfolio Building</h3>
                  <p className="text-gray-600">Create impressive portfolio pieces to showcase to future employers.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 text-primary">
                  <FiCheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Certification</h3>
                  <p className="text-gray-600">Receive a certificate of completion and recommendation letter.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Interns collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Programs Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Internship Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized programs based on your interests and career goals.
              Each program offers unique learning opportunities and skill development.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">
                <program.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              
              <h4 className="font-semibold mb-2">Skills you'll learn:</h4>
              <ul className="space-y-2 mb-6">
                {program.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <FiArrowRight className="text-primary mr-2" size={14} />
                    {skill}
                  </li>
                ))}
              </ul>
              
              <Button to="#apply" variant="outline" className="w-full justify-center">
                Apply for {program.title}
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our internship process is designed to be straightforward and focused on maximizing your learning experience.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <FiArrowRight className="text-primary" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">From Our Past Interns</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our previous interns have to say about their experience at Katisa Technologies.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Testimonial {...testimonial} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Form Section */}
      <Section id="apply">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Apply Now</h2>
            <p className="text-gray-600 mb-6">
              Ready to kickstart your career? Fill out the application form and we'll get back to you within 48 hours.
              The internship is remote-friendly and open to students and recent graduates.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Requirements:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-3" />
                  <span>Basic knowledge in your chosen field</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-3" />
                  <span>Commitment of at least 15 hours per week</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-3" />
                  <span>Strong communication skills</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-3" />
                  <span>Eagerness to learn and grow</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Internship Program</label>
                  <select
                    id="program"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai-tools">AI Tools Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                  <input
                    type="file"
                    id="resume"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join?</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <Button variant="primary" className="w-full justify-center">
                  Submit Application
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our internship program? Find answers to common questions below.
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
              <h3 className="text-lg font-semibold mb-2">Is this a paid internship?</h3>
              <p className="text-gray-600">
                Our internship program is unpaid, but offers valuable real-world experience, mentorship, and a certificate upon completion. Some exceptional interns may be offered paid positions after the internship.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">How long is the internship program?</h3>
              <p className="text-gray-600">
                The standard duration is 3 months, but it can be extended based on project requirements and your performance. We're flexible with scheduling to accommodate your studies or other commitments.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">Can I intern remotely?</h3>
              <p className="text-gray-600">
                Yes, our internship program is fully remote-friendly. We use collaboration tools like Slack, Zoom, and GitHub to communicate and manage projects effectively regardless of your location.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">What kind of projects will I work on?</h3>
              <p className="text-gray-600">
                You'll work on real client projects or internal products based on your skills and interests. Projects range from web applications and AI chatbots to automation tools and UI/UX design work.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our internship program today and gain the skills and experience you need to succeed in the tech industry.
            </p>
            <Button to="#apply" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default InternshipPage;
