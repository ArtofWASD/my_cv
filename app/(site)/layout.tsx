import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/src/widgets/header/index";
import { Footer } from "@/src/widgets/footer/index";
import "@/app/globals.css";
import { Providers } from "@/src/shared/providers/providers";
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
