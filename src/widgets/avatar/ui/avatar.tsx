"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="box absolute z-10 h-36 w-36 rounded-2xl bg-slate-200 bg-opacity-40 lg:h-52 lg:w-52"
        animate={{
          rotate: [180, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0,
          spring: {
            stiffness: 1000,
            damping: 10,
          },
        }}
      />
      <motion.div
        className="box relative z-0 h-56 w-56 rounded-2xl bg-blue-500 bg-opacity-80 lg:h-72 lg:w-72"
        animate={{
          rotate: [0, 180],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 0,
          spring: {
            stiffness: 1000,
            damping: 10,
          },
        }}
      />
      <div className="absolute z-20 text-white">
        <Image
          src="/icons/avatar.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
