import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Afrocado - Premium African Fruit & Vegetable Export Company",
    template: "%s | Afrocado - Premium African Produce Export",
  },
  description:
    "Leading African fruit and vegetable export company specializing in premium avocados, citrus fruits, fresh tomatoes, and tropical produce. ISO 22000 certified with global shipping to 25+ countries.",
  keywords: [
    "African produce export",
    "premium avocados",
    "citrus fruits export",
    "fresh vegetables",
    "tropical fruits",
    "organic produce",
    "ISO 22000 certified",
    "cold chain logistics",
    "Ethiopia export company",
    "international shipping",
    "quality control",
    "sustainable agriculture",
  ],
  authors: [{ name: "Afrocado Export Company" }],
  creator: "Afrocado Export Company",
  publisher: "Afrocado Export Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://afrocadoexports.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afrocadoexports.com",
    title: "Afrocado - Premium African Fruit & Vegetable Export Company",
    description:
      "Leading African fruit and vegetable export company specializing in premium avocados, citrus fruits, fresh tomatoes, and tropical produce. ISO 22000 certified with global shipping to 25+ countries.",
    siteName: "Afrocado",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afrocado - Premium African Produce Export",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrocado - Premium African Fruit & Vegetable Export Company",
    description:
      "Leading African fruit and vegetable export company specializing in premium avocados, citrus fruits, fresh tomatoes, and tropical produce.",
    images: ["/twitter-image.jpg"],
    creator: "@afrocado",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://afrocadoexports.com/#organization",
        name: "Afrocado Export Company",
        alternateName: "Afrocado",
        url: "https://afrocadoexports.com",
        logo: {
          "@type": "ImageObject",
          url: "https://afrocadoexports.com/logo.png",
          width: 200,
          height: 200,
        },
        description:
          "Leading African fruit and vegetable export company specializing in premium avocados, citrus fruits, fresh tomatoes, and tropical produce.",
        foundingDate: "2008",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Afrocado Export House",
          addressLocality: "Westlands Business District",
          addressRegion: "Addis Ababa",
          addressCountry: "Ethiopia",
          postalCode: "00100",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254-20-123-4567",
          contactType: "customer service",
          email: "info@afrocadoexports.com",
          availableLanguage: ["English", "Swahili"],
        },
        sameAs: [
          "https://www.linkedin.com/company/afrocado",
          "https://twitter.com/afrocado",
          "https://www.facebook.com/afrocado",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "ISO 22000 Food Safety Management",
            credentialCategory: "certification",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Organic Certification",
            credentialCategory: "certification",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "HACCP Compliance",
            credentialCategory: "certification",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://afrocadoexports.com/#website",
        url: "https://afrocadoexports.com",
        name: "Afrocado - Premium African Produce Export",
        description: "Leading African fruit and vegetable export company",
        publisher: {
          "@id": "https://afrocadoexports.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://afrocadoexports.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://afrocadoexports.com/#webpage",
        url: "https://afrocadoexports.com",
        name: "Afrocado - Premium African Fruit & Vegetable Export Company",
        isPartOf: {
          "@id": "https://afrocadoexports.com/#website",
        },
        about: {
          "@id": "https://afrocadoexports.com/#organization",
        },
        description:
          "Leading African fruit and vegetable export company specializing in premium avocados, citrus fruits, fresh tomatoes, and tropical produce.",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://afrocadoexports.com/#localbusiness",
        name: "Afrocado Export Company",
        image: "https://afrocadoexports.com/og-image.jpg",
        telephone: "+254-20-123-4567",
        email: "info@afrocadoexports.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Afrocado Export House",
          addressLocality: "Westlands Business District",
          addressRegion: "Addis Ababa",
          addressCountry: "Ethiopia",
          postalCode: "00100",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -1.2921,
          longitude: 36.8219,
        },
        url: "https://afrocadoexports.com",
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Ethiopia",
          },
          {
            "@type": "Country",
            name: "Uganda",
          },
          {
            "@type": "Country",
            name: "Tanzania",
          },
        ],
        serviceType: "Agricultural Export Services",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://afrocadoexports.com" />
        <link rel="icon" href="/about-img/logo1-removebg-preview.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Addis Ababa, Ethiopia" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        <meta
          name="DC.title"
          content="Afrocado - Premium African Fruit & Vegetable Export Company"
        />
        <meta
          name="DC.description"
          content="Leading African fruit and vegetable export company specializing in premium avocados, citrus fruits, fresh tomatoes, and tropical produce. ISO 22000 certified with global shipping to 25+ countries."
        />
        <meta
          name="DC.subject"
          content="African produce export, premium avocados, citrus fruits, fresh vegetables, tropical fruits, organic produce"
        />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Ethiopia, East Africa, Global" />
        <meta name="DC.type" content="Business" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://afrocadoexports.com" />
        <meta name="DC.publisher" content="Afrocado Export Company" />
        <meta
          name="DC.rights"
          content="Copyright 2024 Afrocado Export Company"
        />
        <meta name="DC.date.created" content="2024-01-01" />
        <meta name="DC.date.modified" content="2025-01-15" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceOptimizer>{children}</PerformanceOptimizer>
      </body>
    </html>
  );
}
