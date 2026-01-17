import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "./components/Navbar"
import { cn } from "@/lib/utils"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Flores del Tamango",
  description: "Cafetería Flores del Tamango",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tamango_logo.svg" sizes="any" />
      </head>
      <body className="bg-light-bg">
        <Navbar />
        <main
          className={cn(
            "px-4 md:px-10 mt-4",
            geistSans.variable,
            geistMono.variable,
          )}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
