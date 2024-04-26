import { TypeData } from "@/src/shared/api/model/types";

const ProjectPage = ({ data }: { data: TypeData[] }) => {
  //TODO: добавить загрузку проекта по его id  
  return (
    <main className="project-page flex items-center justify-center">
      {data && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </main>
  );
};

export default ProjectPage;
