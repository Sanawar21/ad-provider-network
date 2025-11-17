"use client"

import type React from "react"

interface NeonButtonProps {
  children: React.ReactNode
  variant?: "cyan" | "purple" | "orange"
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
}

export default function NeonButton({
  children,
  variant = "cyan",
  className = "",
  onClick,
  href,
  disabled = false,
}: NeonButtonProps) {
  const glowClasses = {
    cyan: "border-accent-cyan hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] text-accent-cyan hover:text-accent-cyan",
    purple:
      "border-accent-purple hover:shadow-[0_0_30px_rgba(177,51,255,0.6)] text-accent-purple hover:text-accent-purple",
    orange:
      "border-accent-orange hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] text-accent-orange hover:text-accent-orange",
  }

  const baseClasses =
    "px-6 py-3 border-2 transition-all duration-300 font-semibold text-sm uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1"

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${glowClasses[variant]} ${className} inline-block`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${glowClasses[variant]} ${className}`}>
      {children}
    </button>
  )
}
