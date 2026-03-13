import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup: React.FC = () => {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "JS TECH SOLUTION",
        "image": "https://JSTECHSOLUTION.in/logo.png",
        "@id": "https://JSTECHSOLUTION.in",
        "url": "https://JSTECHSOLUTION.in",
        "telephone": "+917017607719",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Digital Academy Center",
            "addressLocality": "Rudraprayag",
            "addressRegion": "Rajasthan",
            "postalCode": "246171",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.2844,
            "longitude": 78.9811
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
            "closes": "18:00"
        },
        "sameAs": [],
        "priceRange": "₹₹",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Website Development & Digital Marketing",
        "provider": {
            "@type": "LocalBusiness",
            "name": "JS TECH SOLUTION"
        },
        "areaServed": [
            {
                "@type": "Country",
                "name": "India"
            },
            {
                "@type": "City",
                "name": "Jaipur"
            },
            {
                "@type": "City",
                "name": "Gurugram"
            },
            {
                "@type": "City",
                "name": "Noida"
            },
            {
                "@type": "State",
                "name": "Rajasthan"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Website Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Services"
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
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
