import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import { motion } from "framer-motion";
import { row1, row2, row3, row4, row5 } from "@/content/RenderSkills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-4 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9" }}
    >
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.3, type: "spring" }}
        viewport={{once:true}}
        className="font-bold text-7xl text-secondary mb-20 w-full text-center"
      >
        Tech Stack
      </motion.h2>
      <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
        {row1.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={70}
            height={70}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
        {row2.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.image}
            width={70}
            height={70}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
        {row3.map(
          (image, index) => (
            console.log(image.image),
            (
              <SkillDataProvider
                key={index}
                src={image.image}
                width={70}
                height={70}
                index={index}
              />
            )
          )
        )}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
        {row4.map(
          (image, index) => (
            console.log(image.image),
            (
              <SkillDataProvider
                key={index}
                src={image.image}
                width={70}
                height={70}
                index={index}
              />
            )
          )
        )}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
        {row5.map(
          (image, index) => (
            console.log(image.image),
            (
              <SkillDataProvider
                key={index}
                src={image.image}
                width={70}
                height={70}
                index={index}
              />
            )
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
