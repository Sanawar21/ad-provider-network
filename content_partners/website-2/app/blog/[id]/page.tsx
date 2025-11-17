"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AdBanner from "@/components/ad-banner"
import Image from "next/image"
import Link from "next/link"

const blogPosts: { [key: string]: any } = {
  "1": {
    id: "1",
    title: "The Future of Web Design in 2024",
    author: "Alex Chen",
    date: "Nov 15, 2024",
    category: "Design",
    readTime: "8 min read",
    image: "/web-design-future-2024.jpg",
    content: `
      <h2>Introduction to Modern Web Design</h2>
      <p>The landscape of web design is evolving rapidly. As we move deeper into 2024, several key trends are reshaping how designers and developers approach creating digital experiences.</p>
      
      <h2>Key Trends Shaping Design</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>The Role of AI in Design</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web design is exciting and full of possibilities. By staying informed about emerging trends and adapting our practices, we can create experiences that are not only beautiful but also meaningful and impactful.</p>
    `,
  },
  "2": {
    id: "2",
    title: "Building Scalable React Applications",
    author: "Jordan Smith",
    date: "Nov 12, 2024",
    category: "Development",
    readTime: "12 min read",
    image: "/react-application-development.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Building React applications that scale requires careful planning and adherence to best practices. This comprehensive guide will walk you through the key principles and patterns.</p>
      
      <h2>Component Architecture</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A well-structured component architecture is fundamental to scalable applications.</p>
      
      <h2>State Management Patterns</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      <h2>Performance Optimization</h2>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
  },
  "3": {
    id: "3",
    title: "Motion Design: More Than Animation",
    author: "Casey Taylor",
    date: "Nov 10, 2024",
    category: "UX",
    readTime: "6 min read",
    image: "/motion-design-animation-interface.jpg",
    content: `
      <h2>Understanding Motion Design</h2>
      <p>Motion design goes far beyond simple animations. It's a crucial aspect of user experience that guides attention and communicates feedback.</p>
      
      <h2>Principles of Effective Motion</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h2>Practical Applications</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id] || blogPosts["1"]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative py-12 px-6 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden mb-12">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none mb-12">
              <div className="text-foreground leading-relaxed space-y-6">
                <h2 className="text-3xl font-bold mt-8 mb-4">Introduction to Modern Web Design</h2>
                <p className="text-muted-foreground">
                  The landscape of web design is evolving rapidly. As we move deeper into 2024, several key trends are
                  reshaping how designers and developers approach creating digital experiences.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Key Trends Shaping Design</h2>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded">
                  <p className="text-foreground font-semibold italic">
                    "{post.title}" captures the essence of modern web development perfectly.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-8 mb-4">The Role of Technology</h2>
                <p className="text-muted-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="text-muted-foreground">
                  The future of web design is exciting and full of possibilities. By staying informed about emerging
                  trends and adapting our practices, we can create experiences that are not only beautiful but also
                  meaningful and impactful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Link key={i} href={`/blog/${i}`}>
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all cursor-pointer group">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      Related Article Title {i}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      A brief description of this related article content.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner 2 */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-3xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-background">
              <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
              <p className="mb-6">Subscribe to our newsletter for more insights on design and development.</p>
              <button className="bg-background text-primary font-bold px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
