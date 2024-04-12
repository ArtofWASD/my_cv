import { mockBD } from "@/src/shared/api/mockBD"
import { AboutPagePrewiev } from "@/src/widgets/aboutPagePreview"
import { ProjectPreviewListItem } from "@/src/widgets/projectPreviewListItem"
const AppPage =  () => {
  const db = mockBD
  return (
    <>
      <AboutPagePrewiev />
      {db &&
        db.map((project) => <ProjectPreviewListItem key={project.id} item={project} />)}
    </>
  )
}
 export default AppPage