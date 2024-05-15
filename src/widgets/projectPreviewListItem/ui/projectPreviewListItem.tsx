"use client";
import { GithubLink } from "@/src/shared/ui/githubLink";
import { motion } from "framer-motion";
import { IPrewievProjectListItem } from "@/src/shared/api/model/types";
import { UsedTechInPorject } from "@/src/shared/ui/usedTechInPorject";
import Link from "next/link";
import Image from "next/image";
import { ProjectPreviewListFooter } from "./projectPreviewListFooter";

export const ProjectPreviewListItem = ({ item }: IPrewievProjectListItem) => {
  const text = {
    rest: { x: 0, y: 0 },
    hover: { x: -28, opacity: 1, transition: { duration: 0.5 } },
  };
  const image = {
    rest: { x: 100, opacity: 0 },
    hover: {
      x: 0,
      opacity: 1,
      scale: 1.2,
      transition: { duration: 0.5 },
      rotate: [45, 90],
    },
  };
  const link = {
    rest: { x: 100, opacity: 0 },
    hover: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <section className="project-preview grid items-center justify-center py-4">
      <p className="project-header sticky pb-2 text-center font-bold md:text-xl lg:pb-8 lg:text-2xl">
        {item.title}
      </p>
      <div className=" h-72 w-72 justify-self-center rounded-2xl bg-opacity-50 drop-shadow-2xl md:hidden">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="h-48 w-48 rounded-2xl bg-contain bg-center bg-no-repeat object-scale-down px-2"
        />
      </div>
      <motion.div
        className="grid items-center px-2 md:h-96 md:px-48"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Link href={`/project/${item.id}`}>
          <div className="project-body grid grid-flow-col justify-center">
            <div
              className="mx-5 place-self-center text-balance pl-0 text-center text-sm md:place-self-start md:text-start md:text-base lg:w-120 lg:pl-9 xl:w-128"
            >
              {item.body}
            </div>
            <motion.div
              layout
              className="project-image relative hidden h-72 w-72 rounded-2xl bg-blue-500 bg-opacity-50 drop-shadow-2xl md:block"
              variants={image}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="h-48 w-48 -rotate-90 rounded-2xl bg-contain bg-center bg-no-repeat object-scale-down"
              />
            </motion.div>
          </div>
        </Link>
        <div className="project-footer flex items-center justify-between gap-2">
          <motion.div
            variants={link}
            className="project-link hidden  items-center gap-2 text-sm md:flex"
          >
            <span className="font-bold">Stack: </span>
            {item.stack.map((techItem, index) => (
              <div key={index}>
                <UsedTechInPorject item={techItem} />
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={link}
            className="project-link hidden text-sm md:block"
          >
            <GithubLink link={item.ginhubUrl} text="GitHub" />
          </motion.div>
        </div>
      </motion.div>
      <ProjectPreviewListFooter item={item} />
    </section>
  );
};
