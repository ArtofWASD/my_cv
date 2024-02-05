"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

const Avatar = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="box w-52 h-52 bg-slate-600 absolute bg-opacity-40 z-10 rounded-2xl"
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
        className="box w-72 h-72 bg-blue-500 bg-opacity-80 relative z-0 rounded-2xl"
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
        Здесь будет ваще лицо
      </div>
    </div>
  )
}

export default Avatar
