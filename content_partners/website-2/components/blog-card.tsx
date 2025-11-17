import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
}

export default function BlogCard({ id, title, excerpt, date, author, category, image }: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer">
        <div className="relative h-48 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">{category}</span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">By {author}</span>
            <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
