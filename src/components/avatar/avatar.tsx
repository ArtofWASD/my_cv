"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const Avatar = () => {
  return (
    <div className="flex justify-center  items-center">
      <motion.div
        className="box w-64 h-64 bg-slate-600 absolute z-10 rounded-2xl"
        animate={{
          rotate: [180, 0],
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
      <motion.div
        className="box w-96 h-96 bg-blue-500 relative z-0 rounded-2xl"
        animate={{
          rotate: [0, 180],
        }}
        transition={{
          duration: 3,
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
      {/* <Image src="/icons/avatar.png" width="350" height="350" alt="avatar" className="absolute z-20"/> */}
    </div>
  )
}

export default Avatar
