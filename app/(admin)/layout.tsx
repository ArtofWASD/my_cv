import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/src/widgets/footer/index";
import "@/app/globals.css";
import { Providers } from "@/src/shared/providers/providers";
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
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
