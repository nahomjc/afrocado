"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconEye,
  IconShare,
  IconHeart,
  IconBookmark,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

// Blog posts data (in a real app, this would come from a CMS or API)
interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  featured: boolean;
  relatedPosts: number[];
}
const blogPosts = [
  {
    id: 1,
    slug: "future-african-agriculture-sustainable-export-practices",
    title: "The Future of African Agriculture: Sustainable Export Practices",
    excerpt:
      "Exploring how sustainable farming practices are revolutionizing African agriculture and creating new opportunities for international export markets.",
    content: `
      <p>African agriculture stands at a pivotal moment in history. With the world's attention increasingly focused on sustainable practices and climate change mitigation, African farmers and exporters are uniquely positioned to lead the global transformation toward more environmentally conscious food production.</p>
      
      <h2>The Current Landscape</h2>
      <p>Traditional farming methods across Africa have long emphasized harmony with nature. However, the pressure to increase yields and meet international standards has sometimes led to practices that compromise long-term sustainability. Today, we're witnessing a renaissance of traditional wisdom combined with modern innovation.</p>
      
      <h2>Sustainable Farming Techniques</h2>
      <p>Our partner farms across Ethiopia, Kenya, and Ghana are implementing cutting-edge sustainable practices:</p>
      <ul>
        <li><strong>Regenerative Agriculture:</strong> Building soil health through crop rotation, cover cropping, and minimal tillage</li>
        <li><strong>Water Conservation:</strong> Implementing drip irrigation and rainwater harvesting systems</li>
        <li><strong>Biodiversity Protection:</strong> Maintaining natural ecosystems alongside agricultural production</li>
        <li><strong>Organic Certification:</strong> Meeting international standards while preserving traditional knowledge</li>
      </ul>
      
      <h2>Export Market Opportunities</h2>
      <p>The global demand for sustainably produced food is growing exponentially. European and North American consumers are increasingly willing to pay premium prices for products that align with their environmental values. This creates unprecedented opportunities for African exporters who can demonstrate genuine commitment to sustainability.</p>
      
      <h2>Technology Integration</h2>
      <p>Modern technology is playing a crucial role in scaling sustainable practices. From precision agriculture tools that optimize water and fertilizer use to blockchain systems that provide complete traceability from farm to consumer, technology is making sustainable farming more efficient and profitable.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>While the opportunities are immense, challenges remain. Access to capital for sustainable farming investments, education and training for farmers, and infrastructure for processing and export all require significant investment. However, the long-term benefits far outweigh the initial costs.</p>
      
      <h2>Looking Forward</h2>
      <p>The future of African agriculture lies in balancing tradition with innovation, local knowledge with global best practices, and immediate needs with long-term sustainability. As we move forward, we're committed to supporting our partner farms in this transformation, ensuring that African agriculture not only feeds the world but does so in a way that preserves our planet for future generations.</p>
    `,
    author: "Kwame Asante",
    authorBio:
      "Agricultural economist with 15 years of experience in sustainable farming practices across Africa.",
    authorImage: "/about-img/unnamed (14).png",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Agriculture",
    tags: ["Sustainability", "Export", "Farming", "Innovation"],
    image: "/about-img/image-1.png",
    views: 1250,
    featured: true,
    relatedPosts: [2, 3, 4],
  },
  {
    id: 2,
    slug: "cold-chain-logistics-ensuring-freshness-farm-to-table",
    title: "Cold Chain Logistics: Ensuring Freshness from Farm to Table",
    excerpt:
      "A deep dive into our state-of-the-art cold chain logistics system that maintains product quality throughout the entire export journey.",
    content: `
      <p>Maintaining the freshness and quality of perishable agricultural products from farm to international markets is one of the most critical challenges in agricultural export. Our comprehensive cold chain logistics system ensures that every product reaches its destination in perfect condition.</p>
      
      <h2>The Science of Freshness</h2>
      <p>Temperature control is just the beginning. Our cold chain system manages multiple variables including humidity, ethylene levels, and atmospheric composition to create optimal conditions for each type of product.</p>
      
      <h2>Technology at Every Step</h2>
      <p>From harvest to delivery, our technology ensures complete traceability and optimal conditions:</p>
      <ul>
        <li><strong>Pre-cooling Facilities:</strong> Immediate temperature reduction at harvest sites</li>
        <li><strong>Controlled Atmosphere Storage:</strong> Customized environments for different products</li>
        <li><strong>Real-time Monitoring:</strong> IoT sensors track conditions throughout the journey</li>
        <li><strong>Refrigerated Transportation:</strong> State-of-the-art vehicles with backup systems</li>
      </ul>
      
      <h2>Quality Assurance</h2>
      <p>Our quality control process includes multiple checkpoints with detailed documentation and testing to ensure that only the highest quality products reach our customers.</p>
    `,
    author: "Aisha Okafor",
    authorBio:
      "Logistics specialist with expertise in cold chain management and international food safety standards.",
    authorImage: "/about-img/unnamed (15).png",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Logistics",
    tags: ["Cold Chain", "Quality", "Technology", "Freshness"],
    image: "/about-img/image-2 (2).png",
    views: 980,
    featured: false,
    relatedPosts: [1, 3, 6],
  },
  {
    id: 3,
    slug: "organic-certification-meeting-international-standards",
    title: "Organic Certification: Meeting International Standards",
    excerpt:
      "Understanding the rigorous process of organic certification and how it opens doors to premium international markets.",
    content: `
      <p>Organic certification is more than just a label—it's a commitment to sustainable practices, environmental protection, and consumer trust. For African farmers looking to access premium international markets, organic certification is often the key to success.</p>
      
      <h2>The Certification Process</h2>
      <p>Obtaining organic certification involves a comprehensive process that typically takes 2-3 years and includes:</p>
      <ul>
        <li><strong>Transition Period:</strong> 3-year conversion from conventional to organic farming</li>
        <li><strong>Documentation:</strong> Detailed records of all farming practices and inputs</li>
        <li><strong>Inspections:</strong> Annual on-site inspections by certified auditors</li>
        <li><strong>Testing:</strong> Regular soil and product testing for contaminants</li>
      </ul>
      
      <h2>International Standards</h2>
      <p>We help our partner farms meet various international standards including USDA Organic, EU Organic, and JAS (Japanese Agricultural Standards), ensuring access to markets worldwide.</p>
    `,
    author: "David Kimani",
    authorBio:
      "Certification specialist with extensive experience in organic standards and international compliance.",
    authorImage: "/about-img/unnamed (16).png",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Certification",
    tags: ["Organic", "Standards", "Certification", "Compliance"],
    image: "/about-img/unnamed (17).png",
    views: 750,
    featured: false,
    relatedPosts: [1, 2, 5],
  },
  {
    id: 4,
    slug: "market-trends-african-produce-global-demand",
    title: "Market Trends: African Produce in Global Demand",
    excerpt:
      "Analyzing current market trends and the growing global demand for premium African fruits and vegetables.",
    content: `
      <p>The global market for African agricultural products is experiencing unprecedented growth, driven by increasing consumer awareness of health benefits, sustainability concerns, and the unique flavors that African produce brings to international cuisine.</p>
      
      <h2>Growing Demand Drivers</h2>
      <p>Several factors are driving increased demand for African produce:</p>
      <ul>
        <li><strong>Health Consciousness:</strong> Growing awareness of nutritional benefits</li>
        <li><strong>Cultural Diversity:</strong> Increasing appreciation for diverse cuisines</li>
        <li><strong>Sustainability:</strong> Preference for environmentally responsible products</li>
        <li><strong>Quality:</strong> Recognition of superior taste and nutritional value</li>
      </ul>
      
      <h2>Market Opportunities</h2>
      <p>European and North American markets are showing particular interest in exotic fruits, organic vegetables, and traditional African crops that offer unique flavors and health benefits.</p>
    `,
    author: "Kwame Asante",
    authorBio:
      "Market analyst specializing in African agricultural exports and global trade trends.",
    authorImage: "/about-img/unnamed (14).png",
    date: "2023-12-28",
    readTime: "4 min read",
    category: "Market Analysis",
    tags: ["Trends", "Global Market", "Demand", "Opportunities"],
    image: "/about-img/unnamed (18).png",
    views: 1100,
    featured: false,
    relatedPosts: [1, 5, 6],
  },
  {
    id: 5,
    slug: "partner-farm-spotlight-success-stories-field",
    title: "Partner Farm Spotlight: Success Stories from the Field",
    excerpt:
      "Celebrating our partner farms and sharing inspiring success stories from farmers across Africa.",
    content: `
      <p>Behind every successful export is a dedicated farmer who has invested their heart and soul into producing the highest quality products. Today, we're proud to share some of the inspiring success stories from our partner farms across Africa.</p>
      
      <h2>Meet the Farmers</h2>
      <p>Our network includes over 200 partner farms across Ethiopia, Kenya, Ghana, and Tanzania, each with their own unique story of success and innovation.</p>
      
      <h2>Success Stories</h2>
      <p>From small family farms that have grown into regional leaders to cooperatives that have transformed entire communities, our partners demonstrate the incredible potential of African agriculture.</p>
    `,
    author: "Aisha Okafor",
    authorBio:
      "Partnership coordinator with deep connections to farming communities across Africa.",
    authorImage: "/about-img/unnamed (15).png",
    date: "2023-12-20",
    readTime: "8 min read",
    category: "Partnerships",
    tags: ["Partners", "Success Stories", "Farming", "Community"],
    image: "/about-img/unnamed (20).png",
    views: 650,
    featured: false,
    relatedPosts: [1, 3, 4],
  },
  {
    id: 6,
    slug: "quality-control-multi-stage-inspection-process",
    title: "Quality Control: Our Multi-Stage Inspection Process",
    excerpt:
      "A behind-the-scenes look at our comprehensive quality control process that ensures only the best products reach our customers.",
    content: `
      <p>Quality is not an accident—it's the result of systematic processes, rigorous standards, and unwavering commitment to excellence. Our multi-stage quality control system ensures that every product that bears our name meets the highest international standards.</p>
      
      <h2>Stage 1: Farm-Level Inspection</h2>
      <p>Our quality control begins at the source, with regular inspections of farming practices, soil conditions, and growing methods.</p>
      
      <h2>Stage 2: Harvest Quality Assessment</h2>
      <p>At harvest time, our quality control team conducts detailed assessments of each batch, testing for size, color, ripeness, and overall quality.</p>
      
      <h2>Stage 3: Processing Facility Checks</h2>
      <p>In our state-of-the-art processing facilities, products undergo thorough cleaning, sorting, and packaging under strict quality control protocols.</p>
      
      <h2>Stage 4: Pre-Export Verification</h2>
      <p>Before products leave our facilities, they undergo final quality verification and documentation to ensure compliance with international standards.</p>
    `,
    author: "David Kimani",
    authorBio:
      "Quality assurance manager with expertise in food safety and international standards.",
    authorImage: "/about-img/unnamed (16).png",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "Quality",
    tags: ["Quality Control", "Inspection", "Standards", "Excellence"],
    image: "/about-img/unnamed (13).png",
    views: 820,
    featured: false,
    relatedPosts: [1, 2, 4],
  },
];

export default function BlogDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const slug = params.slug as string;
    if (slug) {
      const foundPost = blogPosts.find((p) => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
        // Get related posts
        const related = blogPosts.filter(
          (p) => foundPost.relatedPosts.includes(p.id) && p.id !== foundPost.id
        );
        setRelatedPosts(related);
      }
    }
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "email":
        window.open(
          `mailto:?subject=${encodeURIComponent(
            title
          )}&body=${encodeURIComponent(url)}`
        );
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="flex items-center justify-between mb-8">
              <motion.button
                onClick={() => router.back()}
                className="inline-flex items-center text-green-100 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </motion.button>

              <motion.div
                className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full"
                variants={fadeInUp}
              >
                {post.category}
              </motion.div>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              {post.title}
            </motion.h1>

            <motion.p
              className="text-xl text-green-100 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 text-green-100"
              variants={fadeInUp}
            >
              <div className="flex items-center">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-sm">{post.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <IconCalendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <IconClock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <IconEye className="w-4 h-4 mr-2" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />

                <div className="p-8 md:p-12">
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <motion.button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          isLiked
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconHeart
                          className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                        />
                        <span>{isLiked ? "Liked" : "Like"}</span>
                      </motion.button>

                      <motion.button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          isBookmarked
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconBookmark
                          className={`w-4 h-4 ${
                            isBookmarked ? "fill-current" : ""
                          }`}
                        />
                        <span>{isBookmarked ? "Saved" : "Save"}</span>
                      </motion.button>
                    </div>

                    <div className="relative">
                      <motion.button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconShare className="w-4 h-4" />
                        <span>Share</span>
                      </motion.button>

                      {showShareMenu && (
                        <motion.div
                          className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border p-2 z-10"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <button
                            onClick={() => handleShare("facebook")}
                            className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 rounded"
                          >
                            <IconBrandFacebook className="w-4 h-4 text-blue-600" />
                            <span>Facebook</span>
                          </button>
                          <button
                            onClick={() => handleShare("twitter")}
                            className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 rounded"
                          >
                            <IconBrandTwitter className="w-4 h-4 text-blue-400" />
                            <span>Twitter</span>
                          </button>
                          <button
                            onClick={() => handleShare("linkedin")}
                            className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 rounded"
                          >
                            <IconBrandLinkedin className="w-4 h-4 text-blue-700" />
                            <span>LinkedIn</span>
                          </button>
                          <button
                            onClick={() => handleShare("email")}
                            className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 rounded"
                          >
                            <IconMail className="w-4 h-4 text-gray-600" />
                            <span>Email</span>
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-8 space-y-6"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                {/* Author Card */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="text-center">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.author}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {post.authorBio}
                    </p>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                      Follow Author
                    </button>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <motion.div
                          key={relatedPost.id}
                          className="cursor-pointer group"
                          whileHover={{ x: 5 }}
                          onClick={() =>
                            router.push(`/blog/${relatedPost.slug}`)
                          }
                        >
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            width={200}
                            height={100}
                            className="w-full h-24 object-cover rounded-lg mb-2"
                          />
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(relatedPost.date).toLocaleDateString()}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
