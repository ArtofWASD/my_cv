import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="  rounded-full 
 bg-gray-800 px-3 py-1 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800"
    >
      {resolvedTheme === "dark" ? "Светлая тема" : "Темная тема"}
    </button>
  );
}

export default ThemeSwitcher;
