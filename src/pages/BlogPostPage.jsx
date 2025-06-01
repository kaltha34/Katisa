import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { FiCalendar, FiUser, FiTag, FiArrowLeft, FiShare2, FiMessageSquare } from 'react-icons/fi';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Sample blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2025',
      slug: 'ai-business-trends-2025',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'May 28, 2025',
      author: 'Dinesh Perera',
      category: 'AI Trends',
      content: `
        <p>Artificial intelligence is rapidly transforming how businesses operate. In this article, we explore the key AI trends that will shape the business landscape in 2025 and beyond.</p>
        
        <h2>1. Hyper-Personalization at Scale</h2>
        <p>AI is enabling businesses to deliver personalized experiences to customers at an unprecedented scale. By analyzing vast amounts of data, AI systems can predict customer preferences and behaviors with remarkable accuracy, allowing companies to tailor their products, services, and marketing efforts to individual customers.</p>
        <p>This level of personalization was once only possible for high-value customers, but AI is making it accessible for all customer segments. From personalized product recommendations to customized pricing strategies, AI is helping businesses create more meaningful connections with their customers.</p>
        
        <h2>2. Autonomous Decision-Making</h2>
        <p>As AI systems become more sophisticated, they are increasingly capable of making autonomous decisions without human intervention. This trend is particularly evident in areas such as supply chain management, where AI can optimize inventory levels, predict demand, and adjust pricing in real-time.</p>
        <p>By 2025, we expect to see more businesses delegating routine decision-making to AI systems, freeing up human workers to focus on more strategic tasks that require creativity and emotional intelligence.</p>
        
        <h2>3. AI-Enhanced Human Workforce</h2>
        <p>Rather than replacing human workers, AI is increasingly being used to enhance human capabilities. AI assistants can handle routine tasks, provide real-time information, and offer suggestions, allowing human workers to be more productive and effective.</p>
        <p>This collaboration between humans and AI is creating a new paradigm for work, where AI handles the routine and repetitive tasks while humans focus on areas where they excel, such as creativity, empathy, and complex problem-solving.</p>
        
        <h2>4. Ethical AI and Governance</h2>
        <p>As AI becomes more pervasive in business operations, there is growing concern about ethical implications and potential biases in AI systems. In response, businesses are implementing robust governance frameworks to ensure that their AI systems are transparent, fair, and accountable.</p>
        <p>By 2025, we expect to see more standardized approaches to AI ethics and governance, with businesses adopting common principles and practices to ensure that their AI systems are used responsibly.</p>
        
        <h2>5. Edge AI for Real-Time Processing</h2>
        <p>Edge AI involves processing data locally on devices rather than sending it to the cloud for analysis. This approach reduces latency and enables real-time decision-making, which is crucial for applications such as autonomous vehicles, industrial automation, and smart cities.</p>
        <p>As edge computing capabilities continue to improve, we expect to see more businesses adopting edge AI to enable faster, more responsive applications and services.</p>
        
        <h2>Conclusion</h2>
        <p>The future of AI in business is bright, with new applications and use cases emerging every day. By staying abreast of these trends and investing in AI capabilities, businesses can position themselves for success in the increasingly AI-driven economy of 2025 and beyond.</p>
        <p>At Katisa Technologies, we are at the forefront of these trends, helping businesses leverage AI to drive innovation and growth. Contact us to learn more about how we can help your business harness the power of AI.</p>
      `
    },
    {
      id: 2,
      title: 'How Our Internship Program is Shaping Tech Talent in Sri Lanka',
      slug: 'internship-program-impact',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'May 15, 2025',
      author: 'Amali Fernando',
      category: 'Internship',
      content: `
        <p>At Katisa Technologies, we believe in nurturing local talent. Learn how our internship program is helping to build the next generation of tech professionals in Sri Lanka.</p>
        
        <h2>Building a Tech Talent Pipeline</h2>
        <p>Sri Lanka has a growing tech industry with tremendous potential, but there's often a gap between academic education and the practical skills needed in the workplace. Our internship program aims to bridge this gap by providing hands-on experience with real-world projects.</p>
        <p>Since launching our program in 2020, we've trained over 150 interns, many of whom have gone on to successful careers in the tech industry. Some have joined our team full-time, while others have secured positions at leading tech companies or started their own ventures.</p>
        
        <h2>A Comprehensive Learning Experience</h2>
        <p>Our internship program is designed to provide a comprehensive learning experience that covers both technical and soft skills. Interns work on real client projects under the guidance of experienced mentors, gaining practical experience with technologies such as AI, machine learning, and web development.</p>
        <p>In addition to technical training, we also focus on developing soft skills such as communication, teamwork, and problem-solving. These skills are essential for success in the tech industry, where collaboration and effective communication are just as important as technical expertise.</p>
        
        <h2>Success Stories</h2>
        <p>The success of our internship program is best illustrated by the achievements of our former interns. Take Priya, for example, who joined our program with basic coding skills and is now leading a team of developers at a multinational tech company. Or Amal, who used the skills he learned during his internship to launch his own successful tech startup.</p>
        <p>These success stories are a testament to the effectiveness of our approach, which combines practical experience with mentorship and guidance.</p>
        
        <h2>Looking to the Future</h2>
        <p>As we look to the future, we're excited about the potential of our internship program to continue shaping tech talent in Sri Lanka. We're constantly refining our curriculum and expanding our reach to provide opportunities to more aspiring tech professionals.</p>
        <p>If you're interested in joining our internship program, we encourage you to apply. We're always looking for passionate, motivated individuals who are eager to learn and grow in the tech industry.</p>
      `
    },
    {
      id: 3,
      title: 'Case Study: How We Built an AI Chatbot that Increased Sales by 35%',
      slug: 'ai-chatbot-case-study',
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      date: 'May 5, 2025',
      author: 'Rajiv Mendis',
      category: 'Case Study',
      content: `
        <p>Discover how we helped a leading e-commerce company implement an AI chatbot solution that significantly improved customer engagement and boosted sales.</p>
        
        <h2>The Challenge</h2>
        <p>Our client, a leading e-commerce company in Southeast Asia, was experiencing high cart abandonment rates and struggling to provide timely customer support. With a growing customer base and limited support staff, they were looking for a scalable solution that could enhance the customer experience and drive sales.</p>
        
        <h2>Our Approach</h2>
        <p>After a thorough analysis of the client's needs and challenges, we proposed an AI chatbot solution that could handle customer inquiries, provide product recommendations, and guide customers through the purchase process. The chatbot was designed to integrate seamlessly with the client's existing e-commerce platform and customer relationship management (CRM) system.</p>
        <p>We developed the chatbot using a combination of natural language processing (NLP) and machine learning technologies. The NLP capabilities allowed the chatbot to understand and respond to customer inquiries in a natural, conversational manner, while the machine learning algorithms enabled it to learn from interactions and improve over time.</p>
        
        <h2>Key Features</h2>
        <p>The chatbot included several key features designed to enhance the customer experience and drive sales:</p>
        <ul>
          <li>24/7 customer support with instant responses to common inquiries</li>
          <li>Personalized product recommendations based on customer preferences and browsing history</li>
          <li>Guided shopping experience to help customers find the right products</li>
          <li>Seamless handoff to human agents for complex inquiries</li>
          <li>Integration with the client's CRM system for a unified customer view</li>
        </ul>
        
        <h2>The Results</h2>
        <p>The implementation of the AI chatbot had a significant impact on the client's business:</p>
        <ul>
          <li>35% increase in sales within the first three months</li>
          <li>42% reduction in cart abandonment rate</li>
          <li>67% increase in customer satisfaction scores</li>
          <li>50% reduction in support ticket volume, allowing human agents to focus on complex issues</li>
        </ul>
        <p>The chatbot was particularly effective at engaging customers during the browsing and consideration phases of the purchase journey, providing timely information and personalized recommendations that helped convert browsers into buyers.</p>
        
        <h2>Conclusion</h2>
        <p>This case study demonstrates the power of AI chatbots to enhance the customer experience and drive business results. By providing 24/7 support, personalized recommendations, and a guided shopping experience, the chatbot was able to significantly increase sales and customer satisfaction while reducing support costs.</p>
        <p>If you're interested in implementing a similar solution for your business, contact us to learn more about our AI chatbot development services.</p>
      `
    }
  ];
  
  // Find the post based on the slug
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    }, 500);
  }, [slug]);
  
  // Related posts (excluding current post)
  const relatedPosts = post ? blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2) : [];
  
  if (loading) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <Section>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Button to="/blog" variant="primary">
              Back to Blog
            </Button>
          </div>
        </Section>
      </div>
    );
  }
  
  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt || `Read about ${post.title} on the Katisa Technologies blog`} 
        keywords={[post.category, 'blog post', 'tech article', post.author.split(' ')[0]]} 
        image={post.image}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/blog" className="inline-flex items-center text-white mb-8 hover:underline">
            <FiArrowLeft className="mr-2" /> Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm">
              <div className="flex items-center mr-6 mb-2">
                <FiCalendar className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <FiUser className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mb-2">
                <FiTag className="mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-8 -mt-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>
      </div>

      {/* Article Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share and Comments */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-between items-center">
                <div>
                  <h4 className="font-semibold mb-2">Share this article</h4>
                  <div className="flex space-x-3">
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <FiShare2 />
                    </button>
                    {/* Add more social share buttons here */}
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  <button className="inline-flex items-center text-primary hover:underline">
                    <FiMessageSquare className="mr-2" /> 0 Comments
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Author Bio */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">{post.author}</h4>
                  <p className="text-sm text-gray-600">Content Writer at Katisa Technologies</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Expert in AI and technology trends with over 5 years of experience in the tech industry.
              </p>
            </div>
            
            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex">
                        <div className="w-20 h-20 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {['AI Trends', 'Case Study', 'Internship', 'Ethics', 'Success Stories', 'Sustainability'].map((category, index) => (
                  <Link 
                    key={index} 
                    to={`/blog?category=${category}`}
                    className={`px-3 py-1 rounded-full text-sm ${
                      category === post.category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-gray-50">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Interested in Our Services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Learn more about how Katisa Technologies can help your business leverage AI and technology to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/services" variant="primary" className="text-lg px-8 py-3">
                Explore Our Services
              </Button>
              <Button to="/contact" variant="outline" className="text-lg px-8 py-3">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default BlogPostPage;
