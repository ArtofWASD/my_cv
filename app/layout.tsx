import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/src/widgets/header/index";
import { Footer } from "@/src/widgets/footer/index";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chunl3e666 CV",
  description: "Моё резюме",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          `bg-gradient-to-b from-orange-100 via-lime-100 to-sky-800 to-100%`
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
