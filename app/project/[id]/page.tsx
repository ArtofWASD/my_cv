'use client'
import ProjectPage from "@/src/pages/projectPage/projectPage";
import { useParams } from "next/navigation";
import { Suspense } from "react";
const Project = () => {
  const params = useParams<{ id: string }>();  
  return (
      <ProjectPage params={params} />
  );
};
export default Project;
