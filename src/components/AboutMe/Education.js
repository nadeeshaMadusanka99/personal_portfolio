import React from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { dataEducation } from "@/content/Education";

const Details = ({ type, time, place, info, reference }) => {
  return (
    <li
      ref={reference}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
    >
      <LiIcon reference={reference} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm dark:text-teal-300">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-10">
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.3, type: "spring" }}
        viewport={{ once: true }}
        className="font-bold text-7xl mb-32 mt-30 w-full text-center md:text-6xl xs:text-4xl md:mb-16"
      >
        Education
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-8">
          {dataEducation.map((edu, id) => (
            <Details
              key={id}
              type={edu.type}
              time={edu.time}
              place={edu.place}
              info={edu.info}
              reference={ref}
            />
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Education;
