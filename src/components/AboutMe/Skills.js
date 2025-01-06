import React, { useEffect, useState } from "react";
import SkillDataProvider from "./SkillDataProvider";
import { motion } from "framer-motion";
import {
  IconsRender,
} from "@/content/RenderSkills";

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1375);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-4 h-full w-full overflow-hidden pt-20 md:py-10 sm:py-0"
      style={{ transform: "scale(0.9)" }}
    >
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.3, type: "spring" }}
        viewport={{ once: true }}
        className="font-bold text-7xl text-secondary mb-0 w-full text-center md:text-6xl sm:mb-10 sm:text-5xl"
      >
        Tech Stack
      </motion.h2>
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.3, type: "spring" }}
        viewport={{ once: true }}
        className=" text-4xl text-secondary mb-16 w-full text-center md:text-6xl sm:mb-10 sm:text-5xl"
      >
        ( Languages / Frameworks / Libraries / Tools )
      </motion.h2>
      {/* TODO: Add all the icons to the project removing links*/}
      <div className="flex flex-row justify-around flex-wrap mb-12 gap-12 items-center px-2 w-[80%] md:w-[90%] sm:w-full">
        {IconsRender.map((image, index) => (
          <SkillDataProvider
            key={image.id}
            src={image.image}
            width={70}
            height={70}
            index={index}
            name={image.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
