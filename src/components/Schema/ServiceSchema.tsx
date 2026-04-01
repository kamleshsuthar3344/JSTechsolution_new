import { Helmet } from 'react-helmet';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url?: string;
  };
  areaServed: string;
  url: string;
}

export default function ServiceSchema({ name, description, provider, areaServed, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider.name,
      "url": provider.url || "https://jstechsolution.in"
    },
    "areaServed": {
      "@type": "State",
      "name": areaServed
    },
    "url": url,
    "brand": {
      "@type": "Brand",
      "name": "JS TECH SOLUTION"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
