import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Kenya export company",
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
  metadataBase: new URL("https://afrocado.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afrocado.com",
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
        "@id": "https://afrocado.com/#organization",
        name: "Afrocado Export Company",
        alternateName: "Afrocado",
        url: "https://afrocado.com",
        logo: {
          "@type": "ImageObject",
          url: "https://afrocado.com/logo.png",
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
          addressRegion: "Nairobi",
          addressCountry: "Kenya",
          postalCode: "00100",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254-20-123-4567",
          contactType: "customer service",
          email: "info@afrocado.com",
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
        "@id": "https://afrocado.com/#website",
        url: "https://afrocado.com",
        name: "Afrocado - Premium African Produce Export",
        description: "Leading African fruit and vegetable export company",
        publisher: {
          "@id": "https://afrocado.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://afrocado.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://afrocado.com/#webpage",
        url: "https://afrocado.com",
        name: "Afrocado - Premium African Fruit & Vegetable Export Company",
        isPartOf: {
          "@id": "https://afrocado.com/#website",
        },
        about: {
          "@id": "https://afrocado.com/#organization",
        },
        description:
          "Leading African fruit and vegetable export company specializing in premium avocados, citrus fruits, fresh tomatoes, and tropical produce.",
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
        <link rel="canonical" href="https://afrocado.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
