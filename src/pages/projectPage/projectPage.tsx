const ProjectPage = async ({ params }: { params: { id: string } | null }) => {
  return (
    <main className="project-page flex items-center justify-center">
      {params?.id}
    </main>
  );
};

export default ProjectPage;
