export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Welcome to Modern Insights
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Explore thoughtful perspectives on design, technology, and creative innovation.
          </p>
          <a href="#featured" className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover-lift">
            Discover Stories
          </a>
        </div>
      </div>
    </section>
  )
}
