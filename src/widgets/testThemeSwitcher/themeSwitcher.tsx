import { useState, useEffect } from "react";
import ThemeSwitcherIcon from "./themeSwitcherIcon";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

//TODO: перенести в компонент Iconbutton создать отдельный анимации под Sun и Moon
function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <motion.button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="  rounded-full py-1 dark:bg-gray-200"
    >
      {resolvedTheme === "light" ? <ThemeSwitcherIcon theme="moon"/> : <ThemeSwitcherIcon theme="sun"/>}
    </motion.button>
  );
}

export default ThemeSwitcher;
