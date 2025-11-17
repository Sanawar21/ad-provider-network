"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-secondary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl neon-glow-cyan">
            NEXUS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-text-secondary text-sm">
            <Link href="/" className="hover:text-accent-cyan transition-colors duration-300">
              HOME
            </Link>
            <Link href="/about" className="hover:text-accent-cyan transition-colors duration-300">
              ABOUT
            </Link>
            <Link href="/blog" className="hover:text-accent-cyan transition-colors duration-300">
              BLOG
            </Link>
            <Link href="/contact" className="hover:text-accent-cyan transition-colors duration-300">
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-accent-cyan" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 text-text-secondary text-sm">
            <Link href="/" className="hover:text-accent-cyan transition-colors" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="/about" className="hover:text-accent-cyan transition-colors" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
            <Link href="/blog" className="hover:text-accent-cyan transition-colors" onClick={() => setIsOpen(false)}>
              BLOG
            </Link>
            <Link href="/contact" className="hover:text-accent-cyan transition-colors" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
