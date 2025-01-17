import React from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { dataExperience } from "@/content/Experience";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm dark:text-teal-300">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mb-28">
      <h2 className="font-bold text-6xl  mb-20 w-full text-center md:text-6xl sm:mb-10 sm:text-5xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 md:ml-6 xs:ml-8">
          {dataExperience.map((edu) => (
            <Details
              key={edu.id}
              position={edu.position}
              company={edu.company}
              companyLink={edu.companyLink}
              time={edu.time}
              address={edu.address}
              work={edu.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
