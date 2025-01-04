const { default: Link } = require("next/link");
const { WebIcon } = require("../Common/Icons");
import { motion } from "framer-motion";
import Image from "next/image";

const FramerImage = motion(Image);
export const ProjectCard = ({ type, img, title, summary, link = null, github }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full flex items-center justify-between rounded-3xl relative
      ring-2 ring-zinc-300 border-2 border-solid border-zinc-500 shadow-lg shadow-zinc-200  p-12  dark:shadow-md dark:border-zinc-500 dark:bg-card dark:text-light dark:ring-zinc-300 dark:shadow-zinc-200 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.075 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold md:text-base sm:my-1">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10 ">
            <WebIcon className="" />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:hover:border sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
