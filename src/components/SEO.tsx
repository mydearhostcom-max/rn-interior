import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

const SITE_NAME = "RN Interior & Farjana Thai Aluminium";
const OG_IMAGE = "/og-image.png";
const SITE_URL = "https://rninteriorbd.com";

const SEO = ({ title, description }: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  
  // Directly update document.title for immediate effect
  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${OG_IMAGE}`} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${OG_IMAGE}`} />
    </Helmet>
  );
};

export default SEO;
