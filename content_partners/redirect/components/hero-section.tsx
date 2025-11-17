import NeonButton from "./neon-button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, var(--color-border) 25%, var(--color-border) 26%, transparent 27%, transparent 74%, var(--color-border) 75%, var(--color-border) 76%, transparent 77%, transparent),
                           linear-gradient(90deg, transparent 24%, var(--color-border) 25%, var(--color-border) 26%, transparent 27%, transparent 74%, var(--color-border) 75%, var(--color-border) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Layered Glassmorphic Panels */}
        <div className="space-y-6 mb-8 fade-in-up">
          <div className="glass-panel p-8 border-2 border-accent-cyan/30 glow-pulse">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-glow-cyan">NEXUS</h1>
            <p className="text-text-secondary text-xl md:text-2xl">Exploring the future of technology and design</p>
          </div>

          <div className="glass-panel p-6 border-2 border-accent-purple/20 md:ml-16 fade-in-up delay-200">
            <p className="text-accent-purple text-lg font-semibold">Curated insights. Futuristic perspectives.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 fade-in-up delay-300">
          <NeonButton variant="cyan" href="/blog">
            Read Articles
          </NeonButton>
          <NeonButton variant="purple" href="/contact">
            Get in Touch
          </NeonButton>
        </div>
      </div>
    </section>
  )
}
