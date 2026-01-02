import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ title, description, url }) => {
    const siteTitle = 'KLU Academic Tools';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullDescription = description || 'Master your semester with KLU Academic Tools. Track attendance, calculate SGPA/CGPA, and stay ahead.';
    const siteUrl = 'https://kluacademictools.vercel.app' + (url || '');

    return (
        <HelmetProvider>
            <Helmet>
                <title>{fullTitle}</title>
                <meta name="description" content={fullDescription} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={fullDescription} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:type" content="website" />
                {/* You can add more meta tags here like twitter cards, images etc. */}
            </Helmet>
        </HelmetProvider>
    );
};

export default SEO;
