import type React from "react"
import Image from "next/image"

interface ContentSectionProps {
  title: string
  description: string
  image?: string
  imagePosition?: "left" | "right"
  children?: React.ReactNode
}

export default function ContentSection({
  title,
  description,
  image,
  imagePosition = "left",
  children,
}: ContentSectionProps) {
  return (
    <section className="py-12 sm:py-16 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${imagePosition === "right" ? "md:auto-cols-reverse" : ""}`}
        >
          {image && (
            <div
              className={`relative h-64 sm:h-80 rounded-lg overflow-hidden bg-muted ${imagePosition === "right" ? "md:order-2" : ""}`}
            >
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          )}
          <div className={imagePosition === "right" ? "md:order-1" : ""}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
