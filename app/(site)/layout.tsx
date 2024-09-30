import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/src/widgets/header/index";
import { Footer } from "@/src/widgets/footer/index";
import "@/app/globals.css";
import { Providers } from "@/src/shared/providers/providers";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Showcase",
  description: "Простой конструктор портфолио",
};
// провайдер для переключения светлой и тёмной темой
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
