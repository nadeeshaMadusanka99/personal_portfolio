import Head from "next/head";
// import React, { useEffect, useRef } from "react";

//* Import Components
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
// import { useInView, useMotionValue, useSpring } from "framer-motion";
// import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
// import Education from "@/components/Education";
// import TransitionEffect from "@/components/TransitionEffect";
import { profilePic } from "@/imports/index";
import { DataContent } from "@/content/About";
import Image from "next/image";

const About = () => {
  //   const AnimatedNumber = ({ value }) => {
  //     const ref = useRef(null);
  //     const motionValue = useMotionValue(0);
  //     const springValue = useSpring(motionValue, { duration: 3000 });
  //     const isInView = useInView(ref, { once: true });

  //     useEffect(() => {
  //       if (isInView) {
  //         motionValue.set(value);
  //       }
  //     }, [isInView, value, motionValue]);

  //     useEffect(() => {
  //       springValue.on("change", (latest) => {
  //         if (ref.current && latest.toFixed(0) <= value) {
  //           ref.current.textContent = latest.toFixed(0);
  //         }
  //       });
  //     }, [springValue, value]);

  //     return <span ref={ref}></span>;
  //   };
  return (
    <>
      <Head>
        <title>Nadeesha-Profile | About Page</title>
        <meta
          name="nadeeshaprofile"
          content="nadeesha's portfolio about page"
        />
      </Head>
      {/* <TransitionEffect /> */}
      <main className="flex w-full flex-col items-center justify-between ">
        <Layout className="pt-8">
          <AnimatedText
            text="Inspiration Drives Innovation!"
            className="text-7xl mb-20"
          />

          <div className="grid w-full grid-cols-12 gap-16">
            <div className="col-span-5 flex flex-col items-start justify-start mt-6">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 ">
                BIOGRAPHY
              </h2>
              {DataContent.map((data, id) => (
                <p key={id} className=" my-2 text-lg">
                  {data.type}
                </p>
              ))}
            </div>
            <div className="col-span-2"/>
            <div className="col-span-5 relative rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="NadeeshaMadusanka"
                className="w-[25rem] h-[30rem] rounded-2xl"
              />
            </div>
          </div>
          {/* <Skills />
          <Experience />
          <Education /> */}
        </Layout>
      </main>
    </>
  );
};

export default About;
