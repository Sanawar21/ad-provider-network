import { blogPosts } from "@/lib/blog-data"
import BlogCard from "@/components/blog-card"
import AdBanner from "@/components/ad-banner"
import NeonButton from "@/components/neon-button"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <>
      {/* Article Header */}
      <article className="py-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-accent-cyan text-sm font-bold uppercase tracking-wider">{post.category}</span>
              <span className="text-text-muted text-sm">{post.date}</span>
              <span className="text-text-muted text-sm">{post.readTime} min read</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-glow-cyan">{post.title}</h1>

            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center">
                <span className="text-accent-purple font-bold">{post.author[0]}</span>
              </div>
              <div>
                <p className="text-text-primary font-semibold">{post.author}</p>
                <p className="text-text-muted text-sm">Published {post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Featured Image Placeholder */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-96 glass-panel border border-border flex items-center justify-center">
            <span className="text-text-muted">Featured image placeholder</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-text-secondary text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <AdBanner variant="cyan" />
        </div>
      </section>

      {/* Article Meta & Share */}
      <section className="py-12 px-4 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8">
            <div className="mb-6">
              <h3 className="text-accent-purple font-bold mb-4">SHARE THIS ARTICLE</h3>
              <div className="flex gap-4">
                <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors">
                  Copy Link
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-text-secondary mb-4">
                <span className="font-bold text-text-primary">Posted in:</span> {post.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 neon-glow-purple">RELATED ARTICLES</h2>
              <div className="w-16 h-1 bg-accent-cyan"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="orange" />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto flex justify-between">
          <NeonButton variant="purple" href="/blog">
            ← Back to Blog
          </NeonButton>
          <NeonButton variant="cyan" href="/contact">
            Get in Touch →
          </NeonButton>
        </div>
      </section>
    </>
  )
}
