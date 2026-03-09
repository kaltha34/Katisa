import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTrendingUp, FiAward, FiCheck, FiMail } from 'react-icons/fi';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import SEO from '../components/ui/SEO';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import idoraLogo from '../assets/images/Idora.png';

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    experience: '',
    portfolio: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Save application to Firebase
      await addDoc(collection(db, 'applications'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'pending'
      });
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        role: '',
        experience: '',
        portfolio: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('Failed to submit application. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Equity Ownership",
      description: "Get actual shares in IDORA. Own a piece of what you build and share in future success."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Early Team Member",
      description: "Be part of the founding team. Shape the product, culture, and direction from day one."
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Real Impact",
      description: "Your code directly impacts customers. Build features that solve real problems."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Experience & Portfolio",
      description: "Gain startup experience, build your portfolio, and grow your skills with real projects."
    }
  ];

  const roles = [
    {
      title: "Full-Stack Developer",
      skills: ["React", "Node.js", "Firebase", "REST APIs"],
      equity: "3-8%"
    },
    {
      title: "Frontend Developer",
      skills: ["React", "Tailwind CSS", "Responsive Design", "UI/UX"],
      equity: "2-5%"
    },
    {
      title: "Backend Developer",
      skills: ["Node.js", "Express", "Database Design", "API Development"],
      equity: "2-5%"
    },
    {
      title: "Mobile Developer",
      skills: ["React Native", "iOS/Android", "Mobile UI", "NFC Integration"],
      equity: "3-6%"
    },
    {
      title: "UI/UX Designer",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      equity: "2-4%"
    }
  ];

  const vestingTerms = [
    "4-year vesting period with 1-year cliff",
    "Monthly vesting after the first year",
    "All IP and code becomes company property",
    "Written contributor agreement",
    "Documented contributions via GitHub",
    "Formal equity upon business registration"
  ];

  return (
    <>
      <SEO 
        title="Join Our Team - Equity-Based Opportunities | Katisa Technologies"
        description="Join IDORA as an early contributor. Work on innovative NFC technology and earn equity ownership. Looking for developers and designers willing to build something meaningful."
        keywords="startup jobs, equity based work, developer opportunities, startup team, IDORA careers, tech startup"
      />

      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 flex justify-center">
              <img src={idoraLogo} alt="IDORA Logo" className="h-24" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Build the Future of NFC Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join IDORA as an early contributor. Earn equity, gain experience, and be part of something meaningful.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white text-lg">
                <span className="font-bold">⚠️ Important:</span> These are equity-based positions. No monetary payment until business becomes profitable. You'll own shares and participate in future success.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About IDORA */}
      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What is IDORA?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              IDORA is revolutionizing how people share and manage their professional identity using NFC-enabled smart cards. 
              We're building a platform that combines physical NFC cards with a powerful digital profile system.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Think of it as a digital business card on steroids - one tap shares your entire professional presence, 
              portfolio, social links, and contact information. We're currently in early development with a working prototype.
            </p>
            <div className="mt-8">
              <Button href="https://idora.netlify.app/" target="_blank" rel="noopener noreferrer">
                View IDORA Project
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why Join Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join as a Contributor?</h2>
            <p className="text-xl text-gray-600">More than just coding - you're building a business</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Contributor Roles</h2>
            <p className="text-xl text-gray-600">Equity ranges based on experience and commitment level</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {role.equity} equity
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Equity Structure */}
      <Section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">How Equity Works</h2>
            
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vesting Schedule</h3>
              <p className="text-gray-700 mb-6">
                Your equity vests over time to ensure long-term commitment. Here's how it works:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {vestingTerms.map((term, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheck className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{term}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>You join:</strong> Offered 5% equity with 4-year vesting and 1-year cliff
                </p>
                <p>
                  <strong>After 1 year:</strong> You've earned 25% of your shares (1.25% of company)
                </p>
                <p>
                  <strong>After 2 years:</strong> You've earned 50% of your shares (2.5% of company)
                </p>
                <p>
                  <strong>After 4 years:</strong> Fully vested - you own all 5% of your allocation
                </p>
                <p className="text-sm italic bg-yellow-50 p-4 rounded-lg mt-4">
                  <strong>Note:</strong> If you leave before 1 year, you get 0% equity. This protects the company and other contributors from people who don't stay committed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Application Form */}
      <Section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply to Join</h2>
              <p className="text-xl text-gray-600">
                Interested? Tell us about yourself and let's build something great together.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-green-500 text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600">We'll review your application and get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Role Applying For *</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a role...</option>
                      <option value="full-stack">Full-Stack Developer</option>
                      <option value="frontend">Frontend Developer</option>
                      <option value="backend">Backend Developer</option>
                      <option value="mobile">Mobile Developer</option>
                      <option value="designer">UI/UX Designer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Years of Experience *</label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="e.g., 2 years"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Portfolio/GitHub Link</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Why do you want to join? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your motivation, what you can bring to the team, and why you're interested in equity-based work..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" required className="mt-1" />
                      <span className="text-sm text-gray-700">
                        I understand this is an equity-based position with no immediate monetary compensation. I'm committed to contributing quality work in exchange for ownership shares in IDORA.
                      </span>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="inline-block animate-spin mr-2">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FiMail className="inline mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">When will I get paid?</h3>
                <p className="text-gray-700">
                  This is equity-based work. You won't receive monetary payment until the business becomes profitable 
                  and starts distributing profits. Your compensation is ownership shares that have value if the company succeeds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Is the business registered?</h3>
                <p className="text-gray-700">
                  Currently, IDORA is in pre-registration phase. We'll formalize business registration within the next 
                  few months. Your contributions are being tracked, and formal equity agreements will be issued upon registration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How many hours per week?</h3>
                <p className="text-gray-700">
                  Flexible! We understand contributors have other commitments. Minimum 10-15 hours per week is ideal, 
                  but we can discuss based on your availability. Equity percentage reflects time commitment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if I need to leave early?</h3>
                <p className="text-gray-700">
                  If you leave before 1 year, you get no equity. After 1 year, you keep whatever has vested. 
                  We may offer a buyback option for unvested shares at fair market value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Who's currently on the team?</h3>
                <p className="text-gray-700">
                  Currently led by Kalhara Thabrew (Founder/Lead Developer) with 3+ years of experience. 
                  You'll be among the first contributors, giving you significant influence over product direction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Meaningful?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in creating the future of professional networking with NFC technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="#apply" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Apply Now
              </Button>
              <Button 
                to="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                Ask Questions
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default JoinUsPage;
