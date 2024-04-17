import { IPrewievProjectListItem } from "@/src/shared/api/model/types";
import { GithubLink } from "@/src/shared/ui/githubLink";
import { UsedTechInPorject } from "@/src/shared/ui/usedTechInPorject";

export const ProjectPreviewListFooter = ({ item }: IPrewievProjectListItem) => {
  return (
    <div className="grid justify-center md:hidden">
      <div className="flex items-center gap-2 py-2">
        <span className="font-bold">Stack: </span>
        {item.stack.map((techItem, index) => (
          <div key={index} className="grid">
            <UsedTechInPorject item={techItem} />
          </div>
        ))}
      </div>
      <GithubLink link={item.ginhubUrl} text="GitHub" />
    </div>
  );
};
