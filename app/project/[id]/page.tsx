'use client'
import { useParams } from "next/navigation"

const ProjectPage =  () => {
  const params = useParams<{ id: string }>()
  return <>{params?.id}</>
}
export default ProjectPage
