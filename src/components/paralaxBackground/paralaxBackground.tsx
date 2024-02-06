"use client"
import React, { useRef } from "react"
import { MotionValue, motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const РaralaxBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
  }
  const layer1 = useParallax(scrollYProgress, 200)
  const layer2 = useParallax(scrollYProgress, 300)
  const layer3 = useTransform(scrollYProgress, [0, 1], ["0", "100%"])
  const layer4 = useTransform(scrollYProgress, [0, 1], ["0", "100%"])
  const layer5 = useTransform(scrollYProgress, [0, 1], ["0", "100%"])

  return (
    <div className="relative flex flex-col justify-center overflow-scroll items-center" ref={ref}>
      <motion.div
        className="z-10 absolute h-72 w-72 bg-cyan-500 "
        style={{ y: layer1 }}>
      </motion.div>
      <motion.div
        className="absolute z-20 h-72 w-72 bg-orange-500"
        style={{ y: layer2 }}>
      </motion.div>
      {/* <motion.div
        className="absolute bg-mountain2 z-30 h-100 w-full bg-cover bg-center"
        style={{
        
        }}
      />
      <motion.div
        className="absolute bg-mountain1 z-40 h-100 w-full bg-cover bg-center"
        style={{
        
        }}
      />
      <motion.div
        className="absolute bg-tree z-50 h-100 w-full bg-cover bg-center"
        style={{
        
        }}
      /> */}
    </div>
  )
}

export default РaralaxBackground
