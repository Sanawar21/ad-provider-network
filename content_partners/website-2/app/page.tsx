"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import AdBanner from "@/components/ad-banner"

const featuredPosts = [
  {
    id: "1",
    title: "The Future of Web Design in 2024",
    excerpt: "Exploring emerging trends and technologies reshaping how we design digital experiences.",
    date: "Nov 15, 2024",
    author: "Alex Chen",
    category: "Design",
    image: "/web-design-future-trends.jpg",
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating maintainable, performant React codebases.",
    date: "Nov 12, 2024",
    author: "Jordan Smith",
    category: "Development",
    image: "/react-development-architecture.jpg",
  },
  {
    id: "3",
    title: "Motion Design: More Than Animation",
    excerpt: "How purposeful motion can enhance user experience and guide interaction.",
    date: "Nov 10, 2024",
    author: "Casey Taylor",
    category: "UX",
    image: "/motion-design-animation.jpg",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Bold Ideas,
              <br />
              Vibrant Stories
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover insights on design, technology, and culture. Dive into conversations that reshape how we think
              about digital experiences.
            </p>
            <a
              href="#featured"
              className="inline-block bg-gradient-to-r from-primary to-secondary text-background font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Latest Articles
            </a>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section id="featured" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-5xl font-black mb-4">Featured Stories</h2>
              <p className="text-muted-foreground text-lg">Handpicked articles that matter right now</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Ad Section 1 */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Subscribe to get the latest articles delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button
                  type="submit"
                  className="bg-primary text-background font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Ad Section 2 */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Design", "Development", "Culture", "Tech", "UX", "Marketing", "AI", "Trends"].map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <p className="font-semibold group-hover:text-primary transition-colors">{cat}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
