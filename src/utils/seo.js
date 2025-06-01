/**
 * SEO utility functions
 */

/**
 * Default SEO configuration for the website
 */
export const defaultSeoConfig = {
  siteName: 'Katisa Technologies',
  titleTemplate: '%s | Katisa Technologies',
  defaultTitle: 'Katisa Technologies | AI-Powered Software Development in Sri Lanka',
  description: 'Katisa Technologies builds AI-powered software solutions while providing real-world experience to aspiring tech professionals in Sri Lanka.',
  keywords: ['AI', 'software development', 'internship', 'Sri Lanka', 'chatbot', 'MVP'],
  siteUrl: 'https://katisatech.com',
  twitterHandle: '@katisatech',
  twitterCardType: 'summary_large_image',
  facebookAppId: '123456789',
  locale: 'en_US',
  ogType: 'website',
  themeColor: '#4338CA',
};

/**
 * Generates structured data for organization
 * @returns {Object} - Organization structured data
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Katisa Technologies',
    url: 'https://katisatech.com',
    logo: 'https://katisatech.com/logo.png',
    sameAs: [
      'https://twitter.com/katisatech',
      'https://www.facebook.com/katisatech',
      'https://www.linkedin.com/company/katisatech',
      'https://www.instagram.com/katisatech'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-11-123-4567',
      contactType: 'customer service',
      email: 'info@katisatech.com',
      areaServed: 'LK',
      availableLanguage: ['English', 'Sinhala', 'Tamil']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Colombo',
      addressRegion: 'Western Province',
      postalCode: '10100',
      addressCountry: 'LK'
    }
  };
};

/**
 * Generates structured data for a blog post
 * @param {Object} post - Blog post data
 * @returns {Object} - Blog post structured data
 */
export const getBlogPostSchema = (post) => {
  if (!post) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Katisa Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://katisatech.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://katisatech.com/blog/${post.slug}`
    }
  };
};

/**
 * Generates structured data for a service
 * @param {Object} service - Service data
 * @returns {Object} - Service structured data
 */
export const getServiceSchema = (service) => {
  if (!service) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Katisa Technologies',
      url: 'https://katisatech.com'
    },
    serviceType: service.category || 'Software Development',
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka'
    }
  };
};

/**
 * Generates structured data for FAQ
 * @param {Array} faqs - Array of FAQ items with question and answer properties
 * @returns {Object} - FAQ structured data
 */
export const getFaqSchema = (faqs) => {
  if (!faqs || !faqs.length) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

/**
 * Generates canonical URL
 * @param {string} path - Path relative to domain
 * @returns {string} - Full canonical URL
 */
export const getCanonicalUrl = (path = '') => {
  const baseUrl = defaultSeoConfig.siteUrl;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
};

/**
 * Generates meta description with proper length
 * @param {string} description - Original description
 * @param {number} maxLength - Maximum length (default: 160)
 * @returns {string} - Truncated description
 */
export const formatMetaDescription = (description, maxLength = 160) => {
  if (!description) return defaultSeoConfig.description;
  
  if (description.length <= maxLength) return description;
  
  // Truncate at the last complete word before maxLength
  return description.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + '...';
};

/**
 * Combines keywords with defaults
 * @param {Array} pageKeywords - Page-specific keywords
 * @returns {Array} - Combined unique keywords
 */
export const combineKeywords = (pageKeywords = []) => {
  const allKeywords = [...defaultSeoConfig.keywords, ...pageKeywords];
  return [...new Set(allKeywords)]; // Remove duplicates
};

/**
 * Formats title according to template
 * @param {string} title - Page title
 * @returns {string} - Formatted title
 */
export const formatTitle = (title) => {
  if (!title) return defaultSeoConfig.defaultTitle;
  
  return defaultSeoConfig.titleTemplate.replace('%s', title);
};
