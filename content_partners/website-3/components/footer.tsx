import Link from "next/link"
import { Linkedin, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg text-accent mb-4">ModernBlog</h3>
            <p className="text-muted-foreground text-sm">Exploring ideas, design, and technology.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 ModernBlog. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-accent transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
