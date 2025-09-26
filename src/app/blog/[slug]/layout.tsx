import { Metadata } from "next";

// Blog posts data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    id: 1,
    slug: "future-african-agriculture-sustainable-export-practices",
    title: "The Future of African Agriculture: Sustainable Export Practices",
    excerpt:
      "Exploring how sustainable farming practices are revolutionizing African agriculture and creating new opportunities for international export markets.",
    author: "Kwame Asante",
    date: "2024-01-15",
    category: "Agriculture",
    tags: ["Sustainability", "Export", "Farming"],
    image: "/about-img/image-1.png",
  },
  {
    id: 2,
    slug: "cold-chain-logistics-ensuring-freshness-farm-to-table",
    title: "Cold Chain Logistics: Ensuring Freshness from Farm to Table",
    excerpt:
      "A deep dive into our state-of-the-art cold chain logistics system that maintains product quality throughout the entire export journey.",
    author: "Aisha Okafor",
    date: "2024-01-10",
    category: "Logistics",
    tags: ["Cold Chain", "Quality", "Technology"],
    image: "/about-img/image-2 (2).png",
  },
  {
    id: 3,
    slug: "organic-certification-meeting-international-standards",
    title: "Organic Certification: Meeting International Standards",
    excerpt:
      "Understanding the rigorous process of organic certification and how it opens doors to premium international markets.",
    author: "David Kimani",
    date: "2024-01-05",
    category: "Certification",
    tags: ["Organic", "Standards", "Certification"],
    image: "/about-img/unnamed (17).png",
  },
  {
    id: 4,
    slug: "market-trends-african-produce-global-demand",
    title: "Market Trends: African Produce in Global Demand",
    excerpt:
      "Analyzing current market trends and the growing global demand for premium African fruits and vegetables.",
    author: "Kwame Asante",
    date: "2023-12-28",
    category: "Market Analysis",
    tags: ["Trends", "Global Market", "Demand"],
    image: "/about-img/unnamed (18).png",
  },
  {
    id: 5,
    slug: "partner-farm-spotlight-success-stories-field",
    title: "Partner Farm Spotlight: Success Stories from the Field",
    excerpt:
      "Celebrating our partner farms and sharing inspiring success stories from farmers across Africa.",
    author: "Aisha Okafor",
    date: "2023-12-20",
    category: "Partnerships",
    tags: ["Partners", "Success Stories", "Farming"],
    image: "/about-img/unnamed (20).png",
  },
  {
    id: 6,
    slug: "quality-control-multi-stage-inspection-process",
    title: "Quality Control: Our Multi-Stage Inspection Process",
    excerpt:
      "A behind-the-scenes look at our comprehensive quality control process that ensures only the best products reach our customers.",
    author: "David Kimani",
    date: "2023-12-15",
    category: "Quality",
    tags: ["Quality Control", "Inspection", "Standards"],
    image: "/about-img/unnamed (13).png",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Afrocado Export Company",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${post.title} | Afrocado Export Company`,
    description: post.excerpt,
    keywords: [
      "African agriculture",
      "export industry",
      "sustainable farming",
      ...post.tags,
      post.category.toLowerCase(),
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://afrocadoexports.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `https://afrocadoexports.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://afrocadoexports.com${post.image}`],
    },
    alternates: {
      canonical: `https://afrocadoexports.com/blog/${post.slug}`,
    },
  };
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
