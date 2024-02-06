import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/src/components/layout/header/header"
import Footer from "@/src/components/layout/footer/footer"
import РaralaxBackground from "@/src/components/paralaxBackground/paralaxBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chunl3e666 CV",
  description: "Моё резюме",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
