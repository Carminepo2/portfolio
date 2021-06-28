import Head from "next/head";
import SectionWrapper from "../../components/sections/SectionWrapper";
import React from "react";
import ProjectsList from "../../components/projects/ProjectsList";
import BackgroundBlob from "../../components/sections/BackgroundBlob";

function ProjectsPage() {
  const backgroundBlobs = [
    <BackgroundBlob key="header-blob-1" color="purple" sizeClasses="h-[512px] w-[512px]" positionClasses="-left-48 " />,
    <BackgroundBlob key="header-blob-2" color="pink" sizeClasses="w-96 h-96" positionClasses="right-96 top-72" />,
    <BackgroundBlob key="header-blob-3" color="indigo" sizeClasses="w-96 h-96" positionClasses="left-52 top-[512px]" />,
    <BackgroundBlob
      key="header-blob-3"
      color="blue"
      sizeClasses="h-[512px] w-[512px]"
      positionClasses="left-0 top-[1028px]"
    />,
  ];
  return (
    <>
      <Head>
        <title>Carmine Porricelli - Progetti</title>
      </Head>
      <main className="overflow-hidden">
        <SectionWrapper background={backgroundBlobs}>
          <ProjectsList />
        </SectionWrapper>
      </main>
    </>
  );
}

export default ProjectsPage;
