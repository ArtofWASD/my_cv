import { useState, useEffect } from "react";
import ThemeSwitcherIcon from "./themeSwitcherIcon";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon } from "@heroicons/react/16/solid";
import { init } from "next/dist/compiled/webpack/webpack";

//TODO: Подумать уменьшить икноки до 35px
function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    sun: {
      x: 7,
      transition: { duration: 0.4 },
    },
    moon: {
      x: -7,
      transition: { duration: 0.4 },
    },
    moonBg: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
    sunBg: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <motion.div
      className={`rounded-full px-2 ${isOpen ? "bg-blue-500" : "bg-slate-900"}`}
      animate={isOpen ? "moonBg" : "sunBg"}
      variants={variants}
    >
      <motion.button
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light"),
            setIsOpen((isOpen) => !isOpen);
        }}
        className=" rounded-full py-1 mx-1"
        animate={isOpen ? "sun" : "moon"}
        variants={variants}
      >
        {resolvedTheme === "light" ? (
          <ThemeSwitcherIcon theme="moon" />
        ) : (
          <ThemeSwitcherIcon theme="sun" />
        )}
      </motion.button>
    </motion.div>
  );
}

export default ThemeSwitcher;
