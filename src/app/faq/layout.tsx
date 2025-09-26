import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Afrocado Export Company",
  description:
    "Find comprehensive answers to all your questions about our African produce export services, shipping, quality standards, certifications, and partnership opportunities. Expert support for international buyers.",
  keywords: [
    "African produce export FAQ",
    "export shipping questions",
    "quality certification FAQ",
    "minimum order quantities",
    "cold chain logistics FAQ",
    "organic certification questions",
    "export documentation help",
    "international shipping FAQ",
    "Ethiopia export company questions",
    "fresh produce export support",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Afrocado Export Company",
    description:
      "Find comprehensive answers to all your questions about our African produce export services, shipping, quality standards, and partnership opportunities.",
    url: "https://afrocadoexports.com/faq",
    type: "website",
    images: [
      {
        url: "https://afrocadoexports.com/faq-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afrocado FAQ - Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Afrocado Export Company",
    description:
      "Find comprehensive answers to all your questions about our African produce export services, shipping, quality standards, and partnership opportunities.",
    images: ["https://afrocadoexports.com/faq-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://afrocadoexports.com/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
