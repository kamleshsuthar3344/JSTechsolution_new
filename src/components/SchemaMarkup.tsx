import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup: React.FC = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JS TECH SOLUTION",
        "alternateName": "JSTechSolution",
        "url": "https://JSTECHSOLUTION.in",
        "logo": "https://JSTECHSOLUTION.in/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+917665960093",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "Hindi"]
        },
        "sameAs": [
            "https://facebook.com/jstechsolution",
            "https://instagram.com/jstechsolution",
            "https://linkedin.com/company/jstechsolution"
        ]
    };

    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "JS TECH SOLUTION",
        "image": "https://JSTECHSOLUTION.in/logo.png",
        "@id": "https://JSTECHSOLUTION.in",
        "url": "https://JSTECHSOLUTION.in",
        "telephone": "+917665960093",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mansarovar",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302020",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.8530,
            "longitude": 75.7644
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        },
        "priceRange": "₹₹",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "185"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Website Development, SEO & Digital Marketing",
        "provider": {
            "@type": "LocalBusiness",
            "name": "JS TECH SOLUTION"
        },
        "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "City", "name": "Jaipur" },
            { "@type": "City", "name": "Gurugram" },
            { "@type": "City", "name": "Noida" },
            { "@type": "City", "name": "Mumbai" },
            { "@type": "City", "name": "Delhi" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Website Development",
                        "description": "High-performance, SEO-friendly custom websites starting from ₹4,999."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce Solutions",
                        "description": "Complete online store setup with payment gateway integration."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO & Digital Marketing",
                        "description": "Professional SEO services to rank #1 on Google and grow organic traffic."
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(businessSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
