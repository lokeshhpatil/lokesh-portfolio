import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lokesh - Web Developer | Portfolio",
  description:
    "Professional portfolio of Lokesh - Web Developer, Student, and Tech Enthusiast. Showcasing projects, experience, and certifications.",
  keywords: "web developer, portfolio, react, next.js, javascript, frontend developer",
  authors: [{ name: "Lokesh" }],
  openGraph: {
    title: "Lokesh - Web Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and experience",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>{children}</body>
    </html>
  )
}
