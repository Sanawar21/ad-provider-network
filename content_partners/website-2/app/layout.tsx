import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/dist/client/script"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Modern Blog - Bold & Vibrant",
  description: "A contemporary blog website with bold design and engaging content",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          src="http://127.0.0.1/apn-ads.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
