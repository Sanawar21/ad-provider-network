import Layout from "@/components/layout"
import BlogCard from "@/components/blog-card"
import AdBanner from "@/components/ad-banner"

const allPosts = [
  {
    id: "1",
    title: "The Future of Web Design",
    excerpt:
      "Exploring emerging trends and technologies that are shaping the future of web design and user experience.",
    date: "Dec 15, 2024",
    category: "Design",
    image: "/web-design-future.jpg",
  },
  {
    id: "2",
    title: "Minimalism in Digital Products",
    excerpt: "How minimalism principles create more intuitive and beautiful digital experiences for users worldwide.",
    date: "Dec 10, 2024",
    category: "UX",
    image: "/minimalist-ux.jpg",
  },
  {
    id: "3",
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for architecting React applications that grow with your business needs.",
    date: "Dec 5, 2024",
    category: "Development",
    image: "/react-scalable.jpg",
  },
  {
    id: "4",
    title: "The Art of Typography",
    excerpt: "Mastering typography to create visual hierarchy, improve readability, and enhance brand identity.",
    date: "Nov 28, 2024",
    category: "Design",
    image: "/typography-art.jpg",
  },
  {
    id: "5",
    title: "Understanding Color Theory",
    excerpt: "Deep dive into color psychology and how to apply color theory principles in your design work.",
    date: "Nov 20, 2024",
    category: "Design",
    image: "/color-theory.jpg",
  },
  {
    id: "6",
    title: "APIs in Modern Web Development",
    excerpt: "A comprehensive guide to designing and implementing RESTful APIs for modern web applications.",
    date: "Nov 15, 2024",
    category: "Development",
    image: "/api-development.jpg",
  },
  {
    id: "7",
    title: "Accessibility First Design",
    excerpt: "Why accessibility should be at the core of your design process and how to implement it effectively.",
    date: "Nov 10, 2024",
    category: "UX",
    image: "/accessible-design.jpg",
  },
  {
    id: "8",
    title: "The Psychology of User Interfaces",
    excerpt: "Explore how psychological principles influence user behavior and interface design decisions.",
    date: "Nov 5, 2024",
    category: "UX",
    image: "/ui-psychology.jpg",
  },
]

export default function BlogPage() {
  return (
    <Layout>
      <section className="py-12 sm:py-16 bg-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">All Stories</h1>
          <p className="text-lg text-muted-foreground">
            Discover all our articles on design, development, and innovation
          </p>
        </div>
      </section>

      <AdBanner position="horizontal" />

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <AdBanner position="horizontal" />
    </Layout>
  )
}
