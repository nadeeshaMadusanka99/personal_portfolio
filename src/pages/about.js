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
            className="text-7xl mb-20"
          />

          <div className="grid w-full grid-cols-12 gap-16 ">
            <div className="col-span-6 flex flex-col items-start justify-start mt-10">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 ">
                BIOGRAPHY
              </h2>
              {DataContent.map((data, id) => (
                <p key={id} className=" my-2 text-lg">
                  {data.type}
                </p>
              ))}
              <Link
                href="/contact_me"
                className="flex items-center bg-dark text-light mt-6 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                 hover:text-dark border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
              >
                Contact Me
              </Link>
            </div>
            <div className="col-span-" />
            <div className="col-span-5 relative rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0.5, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={profilePic}
                  alt="NadeeshaMadusanka"
                  className="w-[25rem] h-[30rem] rounded-2xl"
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
