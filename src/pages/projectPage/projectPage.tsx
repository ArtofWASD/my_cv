const ProjectPage = ({ params }: { params: { id: string } | null }) => {
    //TODO: добавить загрузку проекта по его id 
  return (
    <main className="project-page flex items-center justify-center">
      {params?.id}
    </main>
  );
};

export default ProjectPage;
