import { IStackItem } from "../api/model/types"
import Image from "next/image"
import { motion } from "framer-motion"

export const UsedTechInPorject = ({ item }: { item: IStackItem }) => {
  const tooltip = {
    inactive: { y: 0, opacity: 0 },
    active: { y: -40, opacity: 1, transition: { duration: 0.5 } },
  }
  const tooltipImage = {
    inactive: { opacity: 1 },
    active: { opacity: 1 },
  }
  return (
    <div >
      <motion.div initial="inactive" whileHover="active" exit="inactive" className="grid justify-items-center">
        <motion.div variants={tooltip} className="absolute rounded-lg bg-blue-600 p-1 text-white ">
          {item.title}
        </motion.div>
        <motion.div variants={tooltipImage}>
          <Image
            src={item.imgUrl}
            width="30"
            height="30"
            alt={item.title}
            className="relative"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
