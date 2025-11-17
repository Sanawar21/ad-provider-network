import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-tertiary/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold neon-glow-cyan mb-4">NEXUS</h3>
            <p className="text-text-secondary text-sm">
              A futuristic blog exploring technology, design, and innovation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-accent-purple mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>
                <Link href="/" className="hover:text-accent-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent-cyan transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-accent-orange mb-4 font-semibold">Follow</h4>
            <div className="flex gap-4 text-text-secondary">
              <a href="#" className="hover:text-accent-cyan transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-accent-cyan transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-accent-cyan transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-text-muted text-sm">
          <p>&copy; 2025 NEXUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
