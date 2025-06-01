import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  defaultSeoConfig, 
  formatTitle, 
  formatMetaDescription, 
  combineKeywords, 
  getCanonicalUrl,
  getOrganizationSchema,
  getBlogPostSchema
} from '../../utils/seo';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image, 
  url,
  type = 'website',
  twitterCard = 'summary_large_image',
  article = {},
  blogPost = null
}) => {
  const metaTitle = formatTitle(title);
  const metaDescription = formatMetaDescription(description);
  const metaKeywords = combineKeywords(keywords);
  const metaUrl = url ? getCanonicalUrl(url) : defaultSeoConfig.siteUrl;
  const metaImage = image || `${defaultSeoConfig.siteUrl}/logo.png`;
  
  // Generate structured data
  const organizationSchema = getOrganizationSchema();
  const blogPostSchema = blogPost ? getBlogPostSchema(blogPost) : null;
  
  // Combine schemas
  const structuredData = blogPostSchema 
    ? [organizationSchema, blogPostSchema] 
    : [organizationSchema];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(', ')} />
      <link rel="canonical" href={metaUrl} />
      <meta name="theme-color" content={defaultSeoConfig.themeColor} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={defaultSeoConfig.siteName} />
      <meta property="og:locale" content={defaultSeoConfig.locale} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard || defaultSeoConfig.twitterCardType} />
      <meta name="twitter:site" content={defaultSeoConfig.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Facebook Meta Tags */}
      {defaultSeoConfig.facebookAppId && (
        <meta property="fb:app_id" content={defaultSeoConfig.facebookAppId} />
      )}
      
      {/* Article Meta Tags (if applicable) */}
      {type === 'article' && article.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === 'article' && article.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {type === 'article' && article.author && (
        <meta property="article:author" content={article.author} />
      )}
      {type === 'article' && article.section && (
        <meta property="article:section" content={article.section} />
      )}
      {type === 'article' && article.tags && (
        <meta property="article:tag" content={article.tags.join(', ')} />
      )}
      
      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
