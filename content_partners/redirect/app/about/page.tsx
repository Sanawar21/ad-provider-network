import AdBanner from "@/components/ad-banner"

export default function AboutPage() {
  const milestones = [
    { year: "2020", title: "Foundation", description: "NEXUS launched as a blog exploring web technologies." },
    {
      year: "2021",
      title: "Growth",
      description: "Expanded content to include design, AI, and digital innovation topics.",
    },
    {
      year: "2022",
      title: "Community",
      description: "Built a thriving community of developers and designers sharing knowledge.",
    },
    {
      year: "2023",
      title: "Evolution",
      description: "Integrated interactive features and immersive storytelling techniques.",
    },
    { year: "2024", title: "Expansion", description: "Reached 500K+ monthly readers across global markets." },
    {
      year: "2025",
      title: "Future",
      description: "Pioneering AI-assisted content creation and predictive tech insights.",
    },
  ]

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Editor",
      expertise: "AI & Web Development",
    },
    {
      name: "Jordan Smith",
      role: "Technical Lead",
      expertise: "Performance & Infrastructure",
    },
    {
      name: "Sam Patel",
      role: "Design Director",
      expertise: "UI/UX & Brand Strategy",
    },
    {
      name: "Morgan Lee",
      role: "Content Strategist",
      expertise: "Digital Marketing & Growth",
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-glow-cyan">ABOUT NEXUS</h1>
          <div className="w-16 h-1 bg-accent-purple mb-8"></div>
          <p className="text-text-secondary text-xl max-w-3xl leading-relaxed">
            NEXUS is a pioneering digital publication dedicated to exploring the intersection of technology, design, and
            innovation. We believe in making complex ideas accessible and inspiring the next generation of creators and
            technologists.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Mission */}
            <div>
              <h2 className="text-4xl font-bold mb-6 neon-glow-purple">Our Mission</h2>
              <div className="w-16 h-1 bg-accent-cyan mb-8"></div>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                We are committed to delivering high-quality, original content that educates, inspires, and provokes
                thought. Our mission is to bridge the gap between cutting-edge technology and human creativity.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start gap-4">
                  <span className="text-accent-cyan font-bold text-lg mt-1">▸</span>
                  <span>
                    <strong className="text-text-primary">Educate</strong> - Share knowledge with clarity and depth
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-purple font-bold text-lg mt-1">▸</span>
                  <span>
                    <strong className="text-text-primary">Inspire</strong> - Spark creativity and innovation
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent-orange font-bold text-lg mt-1">▸</span>
                  <span>
                    <strong className="text-text-primary">Connect</strong> - Build a global community of
                    forward-thinkers
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Stats Panel */}
            <div className="space-y-4">
              <div className="glass-panel p-8 border-2 border-accent-cyan/30 hover:border-accent-cyan transition-colors">
                <p className="text-accent-cyan font-bold text-sm mb-2 uppercase tracking-wide">Articles Published</p>
                <p className="text-5xl font-bold text-text-primary">500+</p>
              </div>

              <div className="glass-panel p-8 border-2 border-accent-purple/30 hover:border-accent-purple transition-colors">
                <p className="text-accent-purple font-bold text-sm mb-2 uppercase tracking-wide">Monthly Readers</p>
                <p className="text-5xl font-bold text-text-primary">500K+</p>
              </div>

              <div className="glass-panel p-8 border-2 border-accent-orange/30 hover:border-accent-orange transition-colors">
                <p className="text-accent-orange font-bold text-sm mb-2 uppercase tracking-wide">Countries Reached</p>
                <p className="text-5xl font-bold text-text-primary">127</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="cyan" />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-glow-orange">Our Journey</h2>
            <div className="w-16 h-1 bg-accent-purple"></div>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="glass-panel p-8 border-l-4 border-accent-cyan">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <span className="text-accent-cyan font-bold text-2xl mb-2 md:mb-0">{milestone.year}</span>
                  <h3 className="text-2xl font-bold text-text-primary">{milestone.title}</h3>
                </div>
                <p className="text-text-secondary">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="purple" />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-glow-purple">Meet the Team</h2>
            <div className="w-16 h-1 bg-accent-cyan"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="glass-panel glass-panel-hover p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple mx-auto mb-4 flex items-center justify-center">
                  <span className="text-text-primary font-bold text-xl">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">{member.name}</h3>
                <p className="text-accent-purple text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 neon-glow-cyan">Our Values</h2>
            <div className="w-16 h-1 bg-accent-orange"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 border-2 border-accent-cyan/20">
              <h3 className="text-2xl font-bold text-accent-cyan mb-4">Innovation</h3>
              <p className="text-text-secondary">
                We stay at the forefront of technological advancement and push boundaries in digital publishing.
              </p>
            </div>

            <div className="glass-panel p-8 border-2 border-accent-purple/20">
              <h3 className="text-2xl font-bold text-accent-purple mb-4">Integrity</h3>
              <p className="text-text-secondary">
                We maintain the highest standards of editorial excellence and truthful reporting in all our work.
              </p>
            </div>

            <div className="glass-panel p-8 border-2 border-accent-orange/20">
              <h3 className="text-2xl font-bold text-accent-orange mb-4">Community</h3>
              <p className="text-text-secondary">
                We foster a supportive environment where ideas are shared, discussed, and celebrated together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AdBanner variant="orange" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-12 text-center border-2 border-accent-cyan/30">
            <h2 className="text-4xl font-bold mb-4 neon-glow-cyan">Be Part of the Nexus</h2>
            <p className="text-text-secondary text-lg mb-8">
              Join our growing community of innovators, creators, and technologists. Share your ideas, collaborate, and
              shape the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-accent-cyan text-accent-cyan hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all uppercase font-semibold"
              >
                Get in Touch
              </a>
              <a
                href="/blog"
                className="px-6 py-3 border-2 border-accent-purple text-accent-purple hover:shadow-[0_0_20px_rgba(177,51,255,0.5)] transition-all uppercase font-semibold"
              >
                Explore Articles
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
