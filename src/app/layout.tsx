import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRS Shirts | Premium Wholesale Shirts Jabalpur Madhya Pradesh",
  description: "Get high-quality men's shirts at wholesale rates from SRS Shirts in Sarafa, Jabalpur, MP. Bulk supplies for garment stores, resellers, and distributors.",
  keywords: [
    "SRS Shirts wholesale",
    "wholesale shirts Jabalpur",
    "shirt wholesale Madhya Pradesh",
    "bulk shirts supplier Sarafa",
    "mens shirts wholesale Jabalpur",
    "clothing wholesale market Jabalpur",
    "SRS Shirts Sarafa"
  ],
  openGraph: {
    title: "SRS Shirts | Premium Wholesale Shirts Jabalpur",
    description: "Get high-quality men's shirts at wholesale rates from SRS Shirts in Sarafa, Jabalpur. Sells in bulk to retailers and shop owners.",
    type: "website",
    locale: "en_IN",
    url: "https://srsshirts.com",
    siteName: "SRS Shirts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SRS Shirts",
    "image": "https://images.unsplash.com/photo-1620012253295-c05cb3e65228?q=80&w=600&auto=format&fit=crop",
    "description": "Premium Wholesale Shirt Supplier in Jabalpur, Madhya Pradesh. Supplying quality shirts to garment shops, retailers, and resellers from Sarafa.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sarafa Bazar",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.1706",
      "longitude": "79.9272"
    },
    "url": "https://srsshirts.com",
    "telephone": "+91-7509847447",
    "priceRange": "INR",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:30"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-dark bg-white">
        {children}
      </body>
    </html>
  );
}
