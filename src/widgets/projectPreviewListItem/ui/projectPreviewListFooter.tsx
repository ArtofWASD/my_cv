import { IPrewievProjectListItem } from "@/src/shared/api/model/types"
import { GithubLink } from "@/src/shared/ui/githubLink"
import { UsedTechInPorject } from "@/src/shared/ui/usedTechInPorject"

export const ProjectPreviewListFooter = ({ item }: IPrewievProjectListItem) => {
  return (
    <div className="grid md:hidden justify-center">
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
  )
}
