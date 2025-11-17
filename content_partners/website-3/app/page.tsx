import Layout from "@/components/layout"
import HeroSection from "@/components/hero-section"
import BlogCard from "@/components/blog-card"
import AdBanner from "@/components/ad-banner"
import ContentSection from "@/components/content-section"

const featuredPosts = [
  {
    id: "1",
    title: "The Future of Web Design",
    excerpt:
      "Exploring emerging trends and technologies that are shaping the future of web design and user experience.",
    date: "Dec 15, 2024",
    category: "Design",
    image: "/modern-web-design.jpg",
  },
  {
    id: "2",
    title: "Minimalism in Digital Products",
    excerpt: "How minimalism principles create more intuitive and beautiful digital experiences for users worldwide.",
    date: "Dec 10, 2024",
    category: "UX",
    image: "/minimalist-design.jpg",
  },
  {
    id: "3",
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for architecting React applications that grow with your business needs.",
    date: "Dec 5, 2024",
    category: "Development",
    image: "/react-development.jpg",
  },
  {
    id: "4",
    title: "The Art of Typography",
    excerpt: "Mastering typography to create visual hierarchy, improve readability, and enhance brand identity.",
    date: "Nov 28, 2024",
    category: "Design",
    image: "/typography-design.jpg",
  },
]

export default function Home() {
  return (
    <Layout>
      <HeroSection />

      <AdBanner position="horizontal" />

      <section id="featured" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <ContentSection
        title="Why Read Modern Blog?"
        description="Our blog offers curated insights on design, technology, and innovation. Each article is carefully crafted to provide actionable takeaways and fresh perspectives on the topics that matter."
        image="/blog-insights.jpg"
      >
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Thoughtfully researched and well-reasoned articles</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Regular updates on industry trends and best practices</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Community of forward-thinking readers</span>
          </li>
        </ul>
      </ContentSection>

      <AdBanner position="horizontal" />

      <ContentSection
        title="Latest Insights"
        description="Stay updated with our newest articles covering design trends, development techniques, and creative innovation."
        image="/latest-content.jpg"
        imagePosition="right"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Design", "Development", "Business"].map((category) => (
              <div key={category} className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
                <h3 className="text-xl font-bold text-foreground mb-2">{category}</h3>
                <p className="text-muted-foreground">Explore our collection of {category.toLowerCase()} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner position="horizontal" />
    </Layout>
  )
}
