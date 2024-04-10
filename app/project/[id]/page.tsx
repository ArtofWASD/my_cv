'use client'
import { useParams } from "next/navigation"

const ProjectPage =  () => {
  const params = useParams<{ id: string }>()
  return <div className="project-page flex items-center justify-center">page id:{params?.id}</div>
}
export default ProjectPage
