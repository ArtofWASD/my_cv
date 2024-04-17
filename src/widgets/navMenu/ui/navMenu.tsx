"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface INavItems {
  name: string;
  img: string;
  url: string;
}

export const NavMenu = ({ menuItems }: { menuItems: Array<INavItems> }) => {
  const icon = {
    initial: { opacity: 0, y: 0 },
    hover: { scale: 1.2, y: -35, opacity: 1, transition: { duration: 0.5 } },
    tap: { scale: 1, y: -30 },
  };

  const text = {
    hover: { scale: 1.2 },
    tap: { scale: 1 },
  };
  return (
    <>
      <div className="flex justify-center gap-20">
        {menuItems.map((item) => (
          <motion.div
            key={item.name}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href={item.url}
              className="grid items-end justify-items-center"
            >
              <motion.p
                className="absolute cursor-pointer text-xl"
                variants={text}
              >
                {item.name}
              </motion.p>
              <motion.div variants={icon}>
                <Image
                  src={item.img}
                  width="45"
                  height="45"
                  alt={item.name}
                  className="relative cursor-pointer "
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};
