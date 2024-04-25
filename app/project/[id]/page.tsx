'use client'
import ProjectPage from "@/src/pages/projectPage/projectPage";
import { useParams } from "next/navigation";
import { Suspense } from "react";
const Project = () => {
  const params = useParams<{ id: string }>();  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectPage params={params} />
    </Suspense>
  );
};
export default Project;
