interface AdBannerProps {
  variant?: "cyan" | "purple" | "orange"
}

export default function AdBanner({ variant = "cyan" }: AdBannerProps) {
  const glowClasses = {
    cyan: "border-accent-cyan shadow-[0_0_30px_rgba(0,217,255,0.3)]",
    purple: "border-accent-purple shadow-[0_0_30px_rgba(177,51,255,0.3)]",
    orange: "border-accent-orange shadow-[0_0_30px_rgba(255,107,53,0.3)]",
  }

  return (
    <div className={`glass-panel ${glowClasses[variant]} p-6 my-8 border-2 flex items-center justify-center min-h-24`}>
      <div className="text-center">
        <p className="text-text-muted text-sm mb-2">ADVERTISEMENT</p>
        <p className={`font-bold text-lg neon-glow-${variant}`}>Your Ad Here</p>
      </div>
    </div>
  )
}
