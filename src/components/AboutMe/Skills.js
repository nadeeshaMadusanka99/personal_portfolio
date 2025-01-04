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
      className="flex flex-col items-center justify-center gap-4 h-full relative overflow-hidden py-20 md:py-10 sm:py-5"
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
      <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
        {IconsRender.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={70}
            height={70}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
