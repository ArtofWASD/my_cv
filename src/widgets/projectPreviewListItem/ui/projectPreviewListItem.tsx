"use client"
import { GithubLink } from "@/src/shared/ui/githubLink"
import { motion } from "framer-motion"
import { IPrewievProjectListItem } from "@/src/shared/api/model/types"
import { UsedTechInPorject } from "@/src/shared/ui/usedTechInPorject"
export const ProjectPreviewListItem = ({ item }: IPrewievProjectListItem) => {
  const text = {
    rest: { x: 0, y: 0 },
    hover: { x: -28, opacity: 1, transition: { duration: 0.5 } },
  }
  const image = {
    rest: { x: 100, opacity: 0 },
    hover: {
      x: 0,
      opacity: 1,
      scale: 1.2,
      transition: { duration: 0.5 },
      rotate: [45, 90],
    },
  }
  const link = {
    rest: { x: 100, opacity: 0 },
    hover: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  }
  return (
    <section className="project-preview z-100 py-4">
      <p className="project-header text-center sticky text-2xl pt-1">{item.title}</p>
      <motion.div
        className="grid items-center h-96 px-48"
        initial="rest"
        whileHover="hover"
        animate="rest">
        <div className="project-body grid grid-flow-col">
          <motion.p className="text-center text-balance place-self-start" variants={text}>
            {item.body}
          </motion.p>
          <motion.div
            layout
            className="project-image w-72 h-72 bg-blue-500 rounded-2xl"
            variants={image}></motion.div>
        </div>
        <div className="project-footer flex gap-2 items-center justify-between pl-12">
        <motion.div variants={link} className="project-link text-sm flex gap-2 items-center">
            <p className="font-bold">Stack: </p>
            {item.stack.map((techItem, index) => (
              <div key={index}>
                <UsedTechInPorject item={techItem} />
              </div>
            ))}
          </motion.div>
          <motion.div variants={link} className="project-link text-sm">
            <GithubLink link={item.ginhubUrl} text="GitHub" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
