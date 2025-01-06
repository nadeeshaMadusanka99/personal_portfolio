/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Common/Layout";
import TransitionEffect from "@/components/Common/TransitionEffect";
import Head from "next/head";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RightArrowIcon } from "@/components/Common/Icons";
import FormCard from "@/components/ContactMe/FormCard";
import AnimatedSvg from "@/components/ContactMe/AnimatedSvg";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};

const contact_me = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <Head>
        <title>Nadeesha Profile | Contact Me</title>
        <meta
          name="nadeeshaprofile"
          content="nadeesha's portfolio contact me page"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full m-8 md:m-4">
        <Layout className="pt-8 md:pt-0">
          <motion.div
            ref={ref}
            className={`flex gap-40 md:flex-col md:gap-8 `}
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div>
              <motion.h1
                className="text-7xl font-extrabold leading-normal text-right text-black dark:text-light  md:text-6xl md:leading-normal md:text-left"
                variants={variants}
              >
                Let’s <br />
                Work <br />
                Together
              </motion.h1>
              <div className="flex flex-row mt-4">
                <p
                  className="text-3xl mr-4 font-semibold text-black/60 dark:text-light/60 md:text-2xl"

                >
                  Connect with me
                </p>
                <RightArrowIcon className="fill-dark opacity-60 dark:fill-light md:size-8 md:pt-2 md:rotate-90" />
              </div>
            </motion.div>
            <div className={`flex-1 relative flex flex-col items-center`}>
              <AnimatedSvg isInView={isInView} />
              <div className="w-full md:flex md:flex-col md:items-center md:gap-4">
                <FormCard />
              </div>
            </div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default contact_me;
