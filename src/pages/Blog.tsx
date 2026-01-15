import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/sections/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Destination Weddings in Dubai",
    excerpt: "Discover why Dubai has become the world's most sought-after destination for luxury weddings, from stunning venues to unforgettable experiences.",
    category: "Destinations",
    date: "January 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Choosing Your Dream Wedding Dress: A Couture Journey",
    excerpt: "From the ateliers of Paris to the showrooms of Milan, explore the world of haute couture bridal fashion.",
    category: "Fashion",
    date: "January 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1594552072238-5c4f8e8c5f9e?w=800&q=80",
  },
  {
    id: "3",
    title: "Floral Trends: What's Blooming in 2026",
    excerpt: "Discover the most stunning floral arrangements and botanical installations defining luxury weddings this year.",
    category: "Decor",
    date: "December 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    id: "4",
    title: "The Art of Wedding Stationery",
    excerpt: "From hand-calligraphed invitations to bespoke wax seals, elevate your wedding correspondence to an art form.",
    category: "Planning",
    date: "December 20, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=800&q=80",
  },
  {
    id: "5",
    title: "Capturing Timeless Moments: Choosing Your Wedding Photographer",
    excerpt: "How to find a photographer whose artistic vision aligns with your wedding aesthetic.",
    category: "Planning",
    date: "December 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
  },
  {
    id: "6",
    title: "Crafting the Perfect Wedding Menu",
    excerpt: "Work with world-renowned chefs to create a culinary experience that delights every guest.",
    category: "Catering",
    date: "December 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

const categories = ["All", "Destinations", "Fashion", "Decor", "Planning", "Catering"];

const FeaturedPost = ({ post }: { post: BlogPost }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative grid md:grid-cols-2 gap-8 mb-20"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-primary text-primary-foreground text-xs uppercase tracking-widest">
            Featured
          </span>
        </div>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          {post.category} · {post.date}
        </span>
        <h2 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
          {post.title}
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4">
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            Read Article
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
      </div>
    </motion.article>
  );
};

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group"
    >
      <Link to={`/blog/${post.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden mb-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {post.category} · {post.readTime}
        </span>
        <h3 className="font-display text-xl mt-2 mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
      </Link>
    </motion.article>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  
  const filteredPosts = activeCategory === "All" 
    ? regularPosts 
    : regularPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <FloatingNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-luxury">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="section-subheader mb-4">The Journal</p>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              Inspiration & <em className="italic">Insights</em>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover the latest trends, expert advice, and behind-the-scenes stories 
              from the world of luxury destination weddings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "border border-border hover:border-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && (
        <section className="pb-16">
          <div className="container-luxury">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-secondary">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto"
          >
            <p className="section-subheader mb-4">Stay Inspired</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Subscribe to Our Journal
            </h2>
            <p className="text-muted-foreground mb-8">
              Receive curated inspiration, planning tips, and exclusive content 
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-background border border-border focus:border-foreground outline-none transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
