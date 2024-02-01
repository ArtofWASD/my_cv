
import AboutPage from "@/src/components/pagesPreview/aboutPage/aboutPage"
import ProjectPage from "@/src/components/pagesPreview/projectsPage/projectPage"

export default function Home() {
  return (
    <main className="grid items-center">
      <AboutPage />
      <ProjectPage />
      <ProjectPage/>
      <ProjectPage/>
      <ProjectPage/> 
    </main>
  )
}
