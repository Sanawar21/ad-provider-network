import Layout from "@/components/layout"
import Image from "next/image"
import AdBanner from "@/components/ad-banner"

const galleryImages = [
  { id: "1", title: "Modern Office Space", query: "modern-office-workspace" },
  { id: "2", title: "Design Inspiration", query: "design-inspiration-board" },
  { id: "3", title: "Creative Process", query: "creative-design-process" },
  { id: "4", title: "Digital Art", query: "digital-art-design" },
  { id: "5", title: "Web Design", query: "web-design-mockup" },
  { id: "6", title: "Team Collaboration", query: "team-design-collaboration" },
  { id: "7", title: "Technology", query: "technology-innovation" },
  { id: "8", title: "Innovation Hub", query: "innovation-hub-space" },
]

export default function GalleryPage() {
  return (
    <Layout>
      <section className="py-12 sm:py-16 bg-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground">Visual stories from our community and projects</p>
        </div>
      </section>

      <AdBanner position="horizontal" />

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative h-64 rounded-lg overflow-hidden bg-muted hover-lift cursor-pointer"
              >
                <Image
                  src={`/.jpg?height=400&width=400&query=${image.query}`}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBanner position="horizontal" />

      <section className="py-12 sm:py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Share Your Work</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have an amazing design or project? We'd love to feature it in our gallery. Submit your work to be
            considered.
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition">
            Submit to Gallery
          </button>
        </div>
      </section>
    </Layout>
  )
}
