import { IStackItem } from "../api/model/types"
import Image from "next/image"

export const UsedTechInPorject = ({ item }: { item: IStackItem }) => {
  return (
    <>
      <Image
        src={item.imgUrl}
        width="30"
        height="30"
        alt={item.title}
        data-tooltip-target="tooltip-default"
      />
      <div
        id="tooltip-default"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  )
}
