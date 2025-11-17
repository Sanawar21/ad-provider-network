import type React from "react"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NEXUS - Futuristic Blog",
  description: "A sleek, modern blog exploring technology, design, and innovation.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceMono.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
