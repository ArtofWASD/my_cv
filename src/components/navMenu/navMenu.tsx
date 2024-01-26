"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface INavItems {
  name: string
  img: string
  url: string
}

const NavMenu = ({ menuItems }: { menuItems: Array<INavItems> }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="grid grid-flow-col items-end justify-items-center">
            <Link href={item.url}>
              <p className="absolute cursor-pointer text-xl">{item.name}</p>
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileHover={{
                  scale: 1.2,
                  y: -30,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}>
                <Image
                  src={item.img}
                  width="45"
                  height="45"
                  alt={item.name}
                  className="relative cursor-pointer "
                />
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default NavMenu
