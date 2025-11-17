"use client"

import Link from "next/link"
import AnimatedSection from "./animated-section"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category?: string
}

export default function BlogCard({ id, title, excerpt, date, author, category = "Tech" }: BlogCardProps) {
  return (
    <AnimatedSection animation="fade-in-up" className="h-full">
      <Link href={`/blog/${id}`}>
        <div className="glass-panel glass-panel-hover p-6 h-full flex flex-col cursor-pointer group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-accent-cyan text-xs font-bold uppercase tracking-wider">{category}</span>
            <span className="text-text-muted text-xs">{date}</span>
          </div>

          <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors">
            {title}
          </h3>

          <p className="text-text-secondary text-sm flex-grow mb-4 line-clamp-3">{excerpt}</p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-text-muted text-xs">By {author}</span>
            <span className="text-accent-purple group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  )
}
