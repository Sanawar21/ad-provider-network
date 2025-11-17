import Layout from "@/components/layout"
import ContentSection from "@/components/content-section"
import AdBanner from "@/components/ad-banner"

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-12 sm:py-16 bg-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Modern Blog</h1>
          <p className="text-lg text-muted-foreground">
            Exploring ideas at the intersection of design, technology, and innovation
          </p>
        </div>
      </section>

      <AdBanner position="horizontal" />

      <ContentSection
        title="Our Mission"
        description="Modern Blog was founded with a simple mission: to share thoughtful, well-researched insights about design, technology, and digital innovation. We believe in the power of clear thinking and beautiful communication to inspire and educate our community."
        image="/blog-mission.jpg"
      />

      <ContentSection
        title="Our Story"
        description="Starting as a personal project, Modern Blog has evolved into a platform where ideas flourish and communities thrive. Our growth is fueled by passionate readers like you and a dedicated team of writers committed to quality content."
        image="/blog-story.jpg"
        imagePosition="right"
      />

      <AdBanner position="horizontal" />

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We prioritize thoughtfully researched, well-written content that provides real value to our readers.",
              },
              {
                title: "Innovation",
                description:
                  "We explore cutting-edge ideas and emerging trends to keep our community at the forefront of industry developments.",
              },
              {
                title: "Community",
                description:
                  "We believe in fostering a supportive community where ideas are shared, debated, and refined collaboratively.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8 hover-lift">
                <h3 className="text-xl font-bold text-accent mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner position="horizontal" />

      <section className="py-12 sm:py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Join Our Community</h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to receive our latest articles directly in your inbox. Be part of our growing community of
              design and technology enthusiasts.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
