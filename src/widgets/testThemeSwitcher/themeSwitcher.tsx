import { useState, useEffect } from "react";
import ThemeSwitcherIcon from "./themeSwitcherIcon";
import { useTheme } from "next-themes";
import { motion, useAnimate } from "framer-motion";

//TODO: Подумать уменьшить икноки до 35px
function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate()

  // const moon = {
  //   visible: {
  //     x: 2,
  //     opacity: 0,
  //     transition: { duration: 0.4 },
  //   },
  //   hidden: {
  //     x: -7,
  //     opacity: 1,
  //     transition: { duration: 0.4 },
  //   },
  // };
  // const sun = {
  //   visible: {
  //     x: 7,
  //     opacity: 1,
  //     transition: { duration: 0.4 },
  //   },
  //   hidden: {
  //     x: 14,
  //     opacity: 0,
  //     transition: { duration: 0.4 },
  //   },
  // };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <motion.div
      className={`rounded-full px-2  ${isOpen ? "bg-blue-500" : "bg-sky-900"}`}
    >
      <motion.button
        ref={scope}
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light"),
            setIsOpen((isOpen) => !isOpen);
        }}
        className=" rounded-full mx-1 py-1"

      >
        {resolvedTheme === "light" ? (
          <motion.div id="moon"  className="">
            <ThemeSwitcherIcon theme="moon" />
          </motion.div>
        ) : (
          <motion.div id="sun" className="">
            <ThemeSwitcherIcon theme="sun" />
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}

export default ThemeSwitcher;
