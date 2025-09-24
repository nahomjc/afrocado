import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Insights & Knowledge Hub | Afrocado Export Company",
  description:
    "Stay updated with the latest trends, insights, and stories from the world of African agriculture and international export. Expert analysis on sustainable farming, cold chain logistics, and market trends.",
  keywords: [
    "African agriculture blog",
    "export industry insights",
    "sustainable farming practices",
    "cold chain logistics",
    "organic certification",
    "market trends analysis",
    "agricultural export news",
    "Kenya farming insights",
    "tropical fruit export",
    "fresh produce logistics",
  ],
  openGraph: {
    title: "Industry Insights & Knowledge Hub | Afrocado Export Company",
    description:
      "Stay updated with the latest trends, insights, and stories from the world of African agriculture and international export.",
    url: "https://afrocadoexports.com/blog",
    type: "website",
    images: [
      {
        url: "https://afrocadoexports.com/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afrocado Blog - Industry Insights & Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Insights & Knowledge Hub | Afrocado Export Company",
    description:
      "Stay updated with the latest trends, insights, and stories from the world of African agriculture and international export.",
    images: ["https://afrocadoexports.com/blog-twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://afrocadoexports.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
