import { useState, useEffect } from "react";
import ThemeSwitcherIcon from "./themeSwitcherIcon";
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
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="  rounded-full 
 bg-gray-800 px-3 py-1 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800"
    >
      {resolvedTheme === "light" ? <ThemeSwitcherIcon theme="moon"/> : <ThemeSwitcherIcon theme="sun"/>}
    </button>
  );
}

export default ThemeSwitcher;
