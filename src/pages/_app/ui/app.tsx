import { mockBD } from "@/src/shared/api/mockBD"
import { AboutPagePrewiev } from "@/src/widgets/aboutPagePreview"
import { ProjectPreviewListItem } from "@/src/widgets/projectPreviewListItem"
export const App = () => {
  const db = mockBD
  return (
    <main className="">
      <AboutPagePrewiev />
      {db &&
        db.map((project) => <ProjectPreviewListItem key={project.id} item={project} />)}
    </main>
  )
}
