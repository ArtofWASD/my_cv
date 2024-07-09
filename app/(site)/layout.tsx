import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/src/widgets/header/index";
import { Footer } from "@/src/widgets/footer/index";
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Showcase",
  description: "Простой конструктор портфолио",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
