import Layout from "@/components/layout"
import AdBanner from "@/components/ad-banner"
import Image from "next/image"

const blogPosts: Record<string, any> = {
  "1": {
    title: "The Future of Web Design",
    date: "Dec 15, 2024",
    category: "Design",
    author: "Sarah Chen",
    image: "/web-design-future.jpg",
    content: [
      {
        type: "paragraph",
        text: "Web design is rapidly evolving as new technologies and user expectations continue to shape the digital landscape. In this article, we explore the emerging trends that are defining the future of web design and user experience.",
      },
      {
        type: "heading",
        text: "Interactive and Dynamic Experiences",
      },
      {
        type: "paragraph",
        text: "Users now expect more than static content. Interactive elements, micro-interactions, and dynamic animations are becoming standard expectations. Web designers are leveraging technologies like WebGL, canvas, and advanced CSS to create immersive digital experiences that engage users at a deeper level.",
      },
      {
        type: "paragraph",
        text: "These technologies allow for smooth transitions, real-time responsiveness, and personalized experiences that adapt to user behavior and preferences.",
      },
      {
        type: "heading",
        text: "Accessibility and Inclusivity",
      },
      {
        type: "paragraph",
        text: "Design with accessibility in mind is no longer optional—it's essential. Modern web design must ensure that all users, regardless of their abilities, can access and enjoy digital content. This includes proper contrast ratios, keyboard navigation, screen reader compatibility, and responsive design that works across all devices.",
      },
      {
        type: "heading",
        text: "Performance and Sustainability",
      },
      {
        type: "paragraph",
        text: "As awareness of digital sustainability grows, web designers are focusing on reducing carbon footprints through efficient code, optimized images, and lean design practices. Fast-loading pages not only improve user experience but also contribute to a more sustainable digital ecosystem.",
      },
    ],
  },
  "2": {
    title: "Minimalism in Digital Products",
    date: "Dec 10, 2024",
    category: "UX",
    author: "Marcus Johnson",
    image: "/minimalist-design.jpg",
    content: [
      {
        type: "paragraph",
        text: "Minimalism has become a dominant force in digital product design. By removing unnecessary elements and focusing on essential functionality, designers create products that are intuitive, beautiful, and user-friendly.",
      },
      {
        type: "heading",
        text: "The Power of White Space",
      },
      {
        type: "paragraph",
        text: "White space, or negative space, is a fundamental principle of minimalist design. It provides visual breathing room, improves readability, and guides user attention to the most important elements. Strategic use of white space can dramatically improve the user experience and perceived quality of a product.",
      },
      {
        type: "heading",
        text: "Typography as Primary Visual Element",
      },
      {
        type: "paragraph",
        text: "In minimalist design, typography plays a crucial role. Beautiful, well-chosen typefaces can communicate your brand's personality and values without relying on unnecessary visual elements. The right typography can make your content more engaging and memorable.",
      },
    ],
  },
}

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = params as unknown as { id: string }
  const post = blogPosts[resolvedParams.id] || blogPosts["1"]

  return (
    <Layout>
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground">By {post.author}</p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden bg-muted mb-12">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <AdBanner position="horizontal" />

          {/* Content */}
          <div className="prose prose-sm sm:prose max-w-none mb-12">
            {post.content.map((block: any, idx: number) => (
              <div key={idx} className="mb-6">
                {block.type === "paragraph" && (
                  <p className="text-lg text-foreground/80 leading-relaxed">{block.text}</p>
                )}
                {block.type === "heading" && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">{block.text}</h2>
                )}
              </div>
            ))}
          </div>

          <AdBanner position="horizontal" />

          {/* Author Bio */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              {post.author} is a passionate writer and designer sharing insights about the digital world. With years of
              experience in the industry, they contribute thought-provoking articles to Modern Blog.
            </p>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">More Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .slice(0, 2)
                .map(([id, p]: any) => (
                  <a
                    key={id}
                    href={`/blog/${id}`}
                    className="group bg-card border border-border rounded-lg p-6 hover-lift"
                  >
                    <h4 className="font-bold text-foreground group-hover:text-accent transition mb-2">{p.title}</h4>
                    <p className="text-sm text-muted-foreground">{p.date}</p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
