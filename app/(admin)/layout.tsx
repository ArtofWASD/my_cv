import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/src/widgets/footer/index";
import "@/app/globals.css";
import { Providers } from "@/src/shared/providers/providers";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "Admin DashBoard",
  description: "Админ панель",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
