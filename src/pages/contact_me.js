/* eslint-disable react-hooks/rules-of-hooks */
import AnimatedText from "@/components/Common/AnimatedText";
import Layout from "@/components/Common/Layout";
import TransitionEffect from "@/components/Common/TransitionEffect";
import Head from "next/head";
import React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RightArrowIcon } from "@/components/Common/Icons";
import useThemeSwitcher from "@/components/Hooks/useThemeSwitcher";
import emailjs from "@emailjs/browser";

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
  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [mode, setMode] = useThemeSwitcher();
  console.log(mode);
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log("error only:", error);
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Nadeesha Profile | Contact Me</title>
        <meta
          name="nadeeshaprofile"
          content="nadeesha's portfolio contact me page"
        />
      </Head>
      {/* <TransitionEffect /> */}
      <main className="w-full m-8 ">
        <Layout className="pt-8">
          <motion.div
            ref={ref}
            className={`flex gap-40`}
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div>
              <motion.h1
                className="text-7xl font-extrabold leading-normal text-right text-black dark:text-light"
                variants={variants}
              >
                Let’s <br />
                Work <br />
                Together
              </motion.h1>
              <div className="flex flex-row mt-4">
                <p
                  className="text-3xl mr-4 font-semibold text-black/60 dark:text-light/60"
                  variants={variants}
                >
                  Connect with me
                </p>
                <RightArrowIcon className="fill-dark opacity-60  dark:fill-light" />
              </div>
            </motion.div>
            <div className={`flex-1 relative`}>
              {/* <motion.div
                className={`stroke-3 stroke-primary ml-10 absolute dark:stroke-primaryDark p-2 -z-1`}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <svg width="480px" height="485px" viewBox="0 0 33.5 32.666">
                  <motion.path
                    strokeWidth={0.2}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 4 }}
                    d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
                  />
                </svg>
              </motion.div> */}

              <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ delay: 4, duration: 1 }}
                className="flex flex-col gap-10 z-10"
              >
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  className=" z-20 p-4 rounded-xl border border-zinc-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  className=" z-20 p-4 w-full  rounded-xl border border-zinc-400 "
                />
                <textarea
                  rows={8}
                  placeholder="Message"
                  name="message"
                  className=" z-20 p-4 w-full  rounded-xl border border-zinc-400"
                />
                {success ? (
                  <button
                    type="submit"
                    className="z-50 bg-green text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent 
    dark:bg-green  dark:text-light"
                  >
                    Successfully Sent
                  </button>
                ) : error ? (
                  <button
                    type="submit"
                    className="z-50 bg-error text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent 
    dark:bg-error  dark:text-white"
                  >
                    Error Occured
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="z-50 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
    hover:text-dark border-2 border-solid border-transparent 
    hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  >
                    Send
                  </button>
                )}
              </motion.form>
            </div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default contact_me;
