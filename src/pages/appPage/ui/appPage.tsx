import { mockBD } from "@/src/shared/api/mockBD";
import { TypeData } from "@/src/shared/api/model/types";
import { AboutPagePrewiev } from "@/src/widgets/aboutPagePreview";
import { ProjectPreviewListItem } from "@/src/widgets/projectPreviewListItem";
const AppPage = ({ data }: { data: TypeData[] }) => {
  const db = mockBD;
  return (
    <>
      <AboutPagePrewiev />
      {db &&
        db.map((project) => (
          <ProjectPreviewListItem key={project.id} item={project} />
        ))}
    </>
  );
};
export default AppPage;
