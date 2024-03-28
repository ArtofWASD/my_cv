import { IStackItem } from "../api/model/types"
import Image from "next/image"

export const UsedTechInPorject = ({ item }: { item: IStackItem }) => {
  return (
    <>
      <Image src={item.imgUrl} width="30" height="30" alt={item.title} />
    </>
  )
}
