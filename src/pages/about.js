import Head from "next/head";

import Layout from "@/components/Common/Layout";
import AnimatedText from "@/components/Common/AnimatedText";
import Skills from "@/components/AboutMe/Skills";
import { profilePic } from "@/imports/index";
import { DataContent } from "@/content/About";
import Image from "next/image";
import Education from "@/components/AboutMe/Education";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/Common/TransitionEffect";
import Experience from "@/components/AboutMe/Experience";

const About = () => {
  return (
    <>
      <Head>
        <title>Nadeesha Profile | About Me</title>
        <meta
          name="nadeeshaprofile"
          content="nadeesha's portfolio about page"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-between dark:text-light">
        <Layout className="pt-8">
          <AnimatedText
            text="Inspiration Drives Innovation!"
            className="text-7xl mb-20 lg:!text-7xl sm:!text-6xl xs:!text-5xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-12 gap-16 md:flex md:flex-col-reverse md:items-center sm:grid-cols-12 sm:gap-6 ">
            <div className="col-span-7 flex flex-col items-start justify-start mt-10  xl:col-span-4  md:col-span-12 md:items-center">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 md:text-xl sm:mb-2 ">
                BIOGRAPHY
              </h2>
              {DataContent.map((data, id) => (
                <p key={data.id} className=" my-2 text-lg md:text-base">
                  {data.type}
                </p>
              ))}
              <div className="sm:justify-center sm:items-center">
                <Link
                  href="/contact_me"
                  className="flex items-center bg-dark text-light mt-6 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                 hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light  hover:dark:border-light md:text-base "
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div
              className="col-span-5 relative ring-2 rounded-3xl ring-zinc-300 border-2 border-solid border-zinc-500 shadow-lg shadow-zinc-200 p-10 
  dark:shadow-md dark:border-zinc-500 dark:bg-card dark:text-light dark:ring-zinc-300 dark:shadow-zinc-200 
  xl:col-span-4 lg:col-span-6 lg:rounded-2xl
  md:col-span-8 
  sm:col-span-10 sm:p-4 sm:rounded-xl
  xs:rounded-lg"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0.1, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 1.5 }}
              >
                <Image
                  src={profilePic}
                  alt="NadeeshaMadusanka"
                  className=" rounded-2xl lg:rounded-xl"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
                />
              </motion.div>
            </div>

          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
