"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="group">
          <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pulse
          </span>
        </Link>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-card rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="/" className="hover:text-primary transition-colors font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary transition-colors font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border md:hidden">
            <ul className="flex flex-col gap-4 p-6">
              <li>
                <Link href="/" className="hover:text-primary transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
