import HeroSection from "@/components/hero-section"
import AdBanner from "@/components/ad-banner"
import BlogCard from "@/components/blog-card"

// Sample blog data
const featuredPosts = [
  {
    id: "1",
    title: "The Future of AI-Driven Design",
    excerpt:
      "Exploring how artificial intelligence is reshaping the design landscape and creating new possibilities for creative professionals.",
    date: "2025-01-15",
    author: "Alex Chen",
    category: "AI",
  },
  {
    id: "2",
    title: "Web Performance Optimization Guide",
    excerpt:
      "Deep dive into the techniques and tools that modern developers use to create lightning-fast web applications.",
    date: "2025-01-12",
    author: "Jordan Smith",
    category: "Dev",
  },
  {
    id: "3",
    title: "Glassmorphism in Modern UI",
    excerpt:
      "Understanding the design trend that combines transparency, blur, and layering to create stunning visual interfaces.",
    date: "2025-01-08",
    author: "Sam Patel",
    category: "Design",
  },
]

const newsItems = [
  {
    title: "Web Tech Evolution",
    description: "React 19 released with major performance improvements and new features.",
  },
  {
    title: "Design Trends 2025",
    description: "Minimalism meets maximalism in contemporary digital design.",
  },
  {
    title: "Future of Dev",
    description: "Edge computing becomes mainstream in application architecture.",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Posts Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow-cyan">FEATURED POSTS</h2>
            <div className="w-16 h-1 bg-accent-purple"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="cyan" />
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow-purple">NEWS & UPDATES</h2>
            <div className="w-16 h-1 bg-accent-orange"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 border-2 border-accent-orange/20 hover:border-accent-orange"
              >
                <h3 className="text-lg font-bold text-accent-orange mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="purple" />
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel p-12 border-2 border-accent-cyan/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-4 neon-glow-cyan">Why NEXUS?</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  NEXUS brings together cutting-edge insights about technology, design, and innovation. Our mission is
                  to bridge the gap between complex concepts and accessible knowledge.
                </p>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan mt-1">▸</span>
                    <span>In-depth technical analysis and tutorials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-purple mt-1">▸</span>
                    <span>Design trends and creative inspiration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-orange mt-1">▸</span>
                    <span>Industry news and forward-thinking perspectives</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="glass-panel p-8 border-2 border-accent-purple/30 text-center">
                  <p className="text-5xl font-bold text-accent-purple mb-4">5K+</p>
                  <p className="text-text-secondary mb-6">Articles published</p>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="orange" />
        </div>
      </section>
    </>
  )
}
