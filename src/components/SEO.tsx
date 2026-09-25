import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const SITE_NAME = "Divya Admission Hub";
const getBaseUrl = (): string => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return "https://divya-admission-hub.vercel.app";
};
const DEFAULT_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDEMDK-lMRgWcjlI2V-PjeDCPVkV6Sfs1gqwoVcpwF4PX4y3cyZ4InOCUEdyeVazEJdD-34t4j8JIsQK_QIYn_-nCISUVJ8daYKRWW616jEUXd2dLgvrZtJvbakJ2nMAc8Pb3nQFlz1E_zYJ0NNe5Se5BB3qgDx-tcehKiClJKmykOGLOvjrFFOGqhCMIUaKsTGz-ExJApogZPEOplV-f8d9ry0o9tHmFtzRoK-D8OejFdWc5PpUAiLUsUl5NV61k5Fd_96LH1ht7bc";

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogType = 'website', 
  image = DEFAULT_IMAGE, 
  schema,
  noindex = false
}: SEOProps) {
  const location = useLocation();
  const baseUrl = getBaseUrl();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

  // Automatically generate BreadcrumbList for SERP snippets
  const pathParts = location.pathname.split('/').filter(Boolean);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${baseUrl}/`
    }
  ];

  pathParts.forEach((part, index) => {
    const formattedName = part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": formattedName,
      "item": `${baseUrl}/${pathParts.slice(0, index + 1).join('/')}`
    });
  });

  const breadcrumbSchema = breadcrumbItems.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  } : null;

  return (
    <Helmet>
      {/* Title & Primary Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Crawl Directives */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta 
          name="robots" 
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" 
        />
      )}

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Breadcrumb Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Page-Specific Custom Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
