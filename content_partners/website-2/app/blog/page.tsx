"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import AdBanner from "@/components/ad-banner"
import { useState } from "react"

const allPosts = [
  {
    id: "1",
    title: "The Future of Web Design in 2024",
    excerpt: "Exploring emerging trends and technologies reshaping how we design digital experiences.",
    date: "Nov 15, 2024",
    author: "Alex Chen",
    category: "Design",
    image: "/web-design-future.jpg",
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating maintainable, performant React codebases.",
    date: "Nov 12, 2024",
    author: "Jordan Smith",
    category: "Development",
    image: "/react-application-development.jpg",
  },
  {
    id: "3",
    title: "Motion Design: More Than Animation",
    excerpt: "How purposeful motion can enhance user experience and guide interaction.",
    date: "Nov 10, 2024",
    author: "Casey Taylor",
    category: "UX",
    image: "/motion-design-interface.jpg",
  },
  {
    id: "4",
    title: "Understanding AI Ethics",
    excerpt: "Navigating the ethical implications of artificial intelligence in modern applications.",
    date: "Nov 8, 2024",
    author: "Morgan Lee",
    category: "AI",
    image: "/artificial-intelligence-ethics.png",
  },
  {
    id: "5",
    title: "Responsive Design Best Practices",
    excerpt: "Creating layouts that work seamlessly across all devices and screen sizes.",
    date: "Nov 5, 2024",
    author: "Riley Davis",
    category: "Design",
    image: "/responsive-web-design.png",
  },
  {
    id: "6",
    title: "The Rise of Headless CMS",
    excerpt: "Why developers are switching to decoupled content management systems.",
    date: "Oct 30, 2024",
    author: "Alex Chen",
    category: "Development",
    image: "/headless-cms-content-management.jpg",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory ? allPosts.filter((post) => post.category === selectedCategory) : allPosts

  const categories = ["Design", "Development", "UX", "AI"]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4">All Articles</h1>
            <p className="text-muted-foreground text-lg">Explore our complete collection of articles and insights</p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === null
                    ? "bg-primary text-background"
                    : "bg-card border border-border hover:border-primary"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-background"
                      : "bg-card border border-border hover:border-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
