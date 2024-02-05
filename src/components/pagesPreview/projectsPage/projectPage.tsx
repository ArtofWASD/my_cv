"use client"
import { motion } from "framer-motion"
import React from "react"

const ProjectPage = () => {
  const text = {
    rest: { x: 0, y: 0 },
    hover: { x: -28, opacity: 1, transition: { duration: 0.5 } },
  }
  const image = {
    rest: { x: 100, opacity: 0 },
    hover: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  }
  return (
    <>
      <p className="project-header text-center sticky text-2xl bg-lime-400">
        Some Header
      </p>
      <motion.div
        className="grid items-center h-96 w-dvw bg-lime-400 px-48"
        initial="rest"
        whileHover="hover"
        animate="rest">
        <motion.div className="project-body grid grid-flow-col">
          <motion.p className="text-center my-auto text-balance" variants={text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
            veritatis accusamus reiciendis voluptatum incidunt, ex vitae consequatur dolor
            atque odio possimus, ab sunt animi, minus doloribus consectetur inventore
            labore perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Inventore dolor quas repudiandae ex voluptatibus labore veritatis temporibus?
            Distinctio, nisi autem numquam quidem facere quod debitis ipsa! Quas earum
            doloremque totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            est impedit quae eum aspernatur sit reprehenderit placeat iste vero fuga
            minima natus, quaerat facilis ullam in voluptate sequi voluptas illum.
          </motion.p>
          <motion.div
            layout
            className="w-72 h-72 bg-blue-500"
            variants={image}
        ></motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default ProjectPage
