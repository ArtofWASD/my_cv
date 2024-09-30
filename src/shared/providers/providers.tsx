"use client";
import { ThemeProvider } from "next-themes";
// Что это такое зха нахуй? Переключатель тёмной светлой темы ?
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
