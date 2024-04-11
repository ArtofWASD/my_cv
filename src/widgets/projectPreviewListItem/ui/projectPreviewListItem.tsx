"use client"
import { GithubLink } from "@/src/shared/ui/githubLink"
import { motion } from "framer-motion"
import { IPrewievProjectListItem } from "@/src/shared/api/model/types"
import { UsedTechInPorject } from "@/src/shared/ui/usedTechInPorject"
import Link from "next/link"
import Image from "next/image"
import { ProjectPreviewListFooter } from "./projectPreviewListFooter"

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
    <section className="project-preview py-4 grid items-center">
      <p className="project-header text-center sticky text-2xl pt-1">{item.title}</p>
      <motion.div
        className="grid items-center h-auto md:h-96 px-2 md:px-48"
        initial="rest"
        whileHover="hover"
        animate="rest">
        <Link href={`/project/${item.id}`}>
          <div className="project-body grid grid-flow-col justify-center">
            <motion.div
              className="text-center text-balance place-self-center md:place-self-start md:text-base text-sm py-2 md:py-0"
              variants={text}>
              {item.body}
            </motion.div>
            <motion.div
              layout
              className="project-image hidden md:block w-72 h-72 bg-blue-500 bg-opacity-50 rounded-2xl relative drop-shadow-2xl"
              variants={image}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="-rotate-90 rounded-2xl bg-contain bg-center bg-no-repeat object-scale-down h-48 w-48"
              />
            </motion.div>
          </div>
        </Link>
        <div className="project-footer flex gap-2 items-center justify-between pl-12">
          <motion.div
            variants={link}
            className="project-link text-sm  gap-2 items-center hidden md:flex">
            <span className="font-bold">Stack: </span>
            {item.stack.map((techItem, index) => (
              <div key={index}>
                <UsedTechInPorject item={techItem} />
              </div>
            ))}
          </motion.div>
          <motion.div variants={link} className="project-link text-sm hidden md:block">
            <GithubLink link={item.ginhubUrl} text="GitHub" />
          </motion.div>
        </div>
      </motion.div>
      <ProjectPreviewListFooter item={item} />
    </section>
  )
}
