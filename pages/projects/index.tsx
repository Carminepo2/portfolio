import Head from "next/head";
import SectionWrapper from "../../components/sections/SectionWrapper";
import React from "react";
import ProjectsList from "../../components/projects/ProjectsList";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Carmine Porricelli - Progetti</title>
      </Head>
      <main className="overflow-hidden py-16">
        <SectionWrapper>
          <ProjectsList />
        </SectionWrapper>
      </main>
    </>
  );
}

export default ProjectsPage;
