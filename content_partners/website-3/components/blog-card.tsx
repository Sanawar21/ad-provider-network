import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export default function BlogCard({ id, title, excerpt, date, category, image }: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <article className="group bg-card rounded-lg overflow-hidden border border-border hover-lift cursor-pointer h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{category}</span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground flex-1 line-clamp-3">{excerpt}</p>
          <div className="mt-4 text-accent font-medium group-hover:translate-x-1 transition-transform">Read More →</div>
        </div>
      </article>
    </Link>
  )
}
