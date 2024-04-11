import { IPrewievProjectListItem } from "@/src/shared/api/model/types"
import { GithubLink } from "@/src/shared/ui/githubLink"
import { UsedTechInPorject } from "@/src/shared/ui/usedTechInPorject"
import Image from "next/image"

export const ProjectPreviewListFooter = ({ item }: IPrewievProjectListItem) => {
  return (
    <div>
      <div className="grid md:hidden justify-center">
        <div className="project-image w-72 h-72 bg-opacity-50 rounded-2xl relative drop-shadow-2xl">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="rounded-2xl bg-contain bg-center bg-no-repeat object-scale-down h-48 w-48 px-2"
          />
        </div>
        <div className="flex gap-2 py-2 items-center">
          <span className="font-bold">Stack: </span>
          {item.stack.map((techItem, index) => (
            <div key={index} className="grid">
              <UsedTechInPorject item={techItem} />
            </div>
          ))}
        </div>
        <GithubLink link={item.ginhubUrl} text="GitHub" />
      </div>
    </div>
  )
}
