import Head from "next/head";

//* Import Components
import Layout from "@/components/Common/Layout";
import AnimatedText from "@/components/Common/AnimatedText";
import Skills from "@/components/AboutMe/Skills";
// import TransitionEffect from "@/components/TransitionEffect";
import { profilePic } from "@/imports/index";
import { DataContent } from "@/content/About";
import Image from "next/image";
// import Experience from "@/components/AboutMe/Experience";
import Education from "@/components/AboutMe/Education";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/Common/TransitionEffect";

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

          <div className="grid w-full grid-cols-12 gap-16 sm:grid-cols-12 sm:gap-6 ">
            <div className="col-span-6 flex flex-col items-start justify-start mt-10  xl:col-span-4 md:order-2 md:col-span-12 ">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 sm:mb-2">
                BIOGRAPHY
              </h2>
              {DataContent.map((data, id) => (
                <p key={id} className=" my-2 text-lg">
                  {data.type}
                </p>
              ))}
              <div className="sm:justify-center sm:items-center">
                <Link
                  href="/contact_me"
                  className="flex items-center bg-dark text-light mt-6 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                 hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:text-base sm:mt-3"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="col-span-" />
            <div
              className="col-span-5 relative rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-6
            md:order-1 md:col-span-12 sm:p-5"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
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
                  className="w-[25rem] h-[31rem] rounded-2xl sm:h-[22rem]"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
                />
              </motion.div>
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
