import React from "react";
import Head from "next/head";

import AnimatedText from "@/components/Common/AnimatedText";
import Layout from "@/components/Common/Layout";
import { ProjectCard } from "@/components/Project/ProjectCard";
import { dataProject } from "@/content/Projects";
import TransitionEffect from "@/components/Common/TransitionEffect";

const project = () => {
  return (
    <>
      <Head>
        <title> Nadeesha-Profile | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Innovation Transcends Expertise! "
            className="text-7xl mb-20"
          />
          <div className={`grid grid-cols-12 gap-24 gap-y-32`}>
            {dataProject.map((project) => (
              <div key={project.id} className={project.styles}>
                <ProjectCard
                type={project.type}
                  title={project.title}
                  summary={project.summary}
                  link={project.link}
                  github={project.github}
                  img={project.img}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;

