import BlogCard from "@/components/blog-card"
import AdBanner from "@/components/ad-banner"
import { blogPosts } from "@/lib/blog-data"

export default function BlogListingPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 neon-glow-cyan">BLOG</h1>
            <div className="w-16 h-1 bg-accent-purple"></div>
          </div>
          <p className="text-text-secondary text-lg max-w-2xl">
            Explore articles on technology, design, AI, and web development. Deep dives into industry trends and
            practical insights for creators and developers.
          </p>
        </div>
      </section>

      {/* Category Tags */}
      <section className="py-12 px-4 bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="glass-panel px-4 py-2 border border-accent-cyan text-accent-cyan text-sm font-semibold"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
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

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-12 text-center border-2 border-accent-orange/30">
            <h2 className="text-3xl font-bold mb-4 neon-glow-orange">Stay Updated</h2>
            <p className="text-text-secondary text-lg mb-8">
              New articles published every week. Subscribe to get the latest insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-bg-tertiary border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-orange transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-orange text-bg-primary font-bold hover:bg-accent-orange/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
