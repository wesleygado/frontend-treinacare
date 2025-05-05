import type React from "react"
import type { Metadata } from "next"
import { Syne } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"

const syne = Syne({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "TreinaCare",
  description: "Encontre o médico ideal para você",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
