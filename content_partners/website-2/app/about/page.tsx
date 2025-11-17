"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AdBanner from "@/components/ad-banner"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4">About Pulse</h1>
            <p className="text-muted-foreground text-xl">
              Exploring the intersection of design, technology, and culture
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Pulse was born from a simple belief: that great design and thoughtful technology can change the world.
                  We started as a small team of passionate designers and developers who wanted to share their insights
                  with the world.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Today, we've grown into a vibrant community of creators, thinkers, and innovators who are shaping the
                  future of digital experiences. Our mission remains the same: to inspire, educate, and elevate the
                  discourse around design and technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a seasoned professional or just starting your journey, we believe there's something
                  here for everyone. Join us as we explore the bold ideas and vibrant stories that define our industry.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/creative-team-collaboration.png" alt="Our team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & Design Lead",
                  bio: "Creative visionary with 10+ years in design",
                },
                {
                  name: "Jordan Smith",
                  role: "Technical Director",
                  bio: "Full-stack developer passionate about scalable systems",
                },
                {
                  name: "Casey Taylor",
                  role: "Content Strategist",
                  bio: "Storyteller bringing ideas to life through words",
                },
                {
                  name: "Morgan Lee",
                  role: "Community Manager",
                  bio: "Connecting creators and building vibrant communities",
                },
              ].map((member, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-8">
                  <div className="relative h-32 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <Image
                      src={`/portrait-professional-.jpg?height=200&width=400&query=portrait professional ${member.name}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner 2 */}
        <section className="py-8 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Creativity",
                  desc: "We believe in pushing boundaries and exploring new possibilities in design and technology.",
                },
                {
                  title: "Integrity",
                  desc: "We're committed to honest conversations and authentic insights that matter to our community.",
                },
                {
                  title: "Impact",
                  desc: "We measure success by the positive impact our work has on designers, developers, and users.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Have a story to share? We'd love to hear from you. Get in touch with our team to collaborate, contribute,
              or just say hello.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-background font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
