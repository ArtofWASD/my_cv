'use client'
import ProjectPage from "@/src/pages/projectPage/projectPage";
import { useParams } from "next/navigation";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { createClient } from "@/src/shared/api/supabase/supabaseClient";
import { TypeData } from "@/src/shared/api/model/types";
const Project = () => {
  const params = useParams<{ id: string }>();
  const supabase = createClient();
  const { data } = useQuery(supabase.from('projectsList').select('*').eq('id', params?.id))
  return (
      <ProjectPage data={data as TypeData[]} />
  );
};
export default Project;


          