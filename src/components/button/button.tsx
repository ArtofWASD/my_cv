"use client"
import React from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const Button = () => {
  const button = {
    rest: { scale: 1 },
    hover: { scale: 1 },
    pressed: { scale: 0.95 },
  }
  const router = useRouter()
  return (
    <motion.div
      className="refresh"
      onClick={() => router.push('/')}
      variants={button}
      initial="rest"
      whileHover="hover">
      <p>Back</p>
    </motion.div>
  )
}

export default Button
