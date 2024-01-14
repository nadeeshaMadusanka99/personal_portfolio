import React from "react";
import { motion } from "framer-motion";
import {RenderSkill} from "@/components/RenderSkill"


const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-20 mb-10 w-full text-center">Skills</h2>
      <div className="w-full h-screen  flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center flex-col rounded-full font-semibold bg-dark text-light px-5 py-3 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-center">
            Web <br /> & <br /> Mobile
          </span>
        </motion.div>
        <RenderSkill name="CSS" x="-5vw" y="-11vw" />
        <RenderSkill name="HTML" x="-20vw" y="2vw" />
        <RenderSkill name="Javascript" x="-20vw" y="2vw" />
        <RenderSkill name="ReactJS" x="-20vw" y="-15vw" />
        <RenderSkill name="NextJS" x="15vw" y="-12vw" />
        <RenderSkill name="Figma" x="32vw" y="-5vw" />
        <RenderSkill name="MongoDB" x="-25vw" y="18vw" />
        <RenderSkill name="mySQL" x="18vw" y="6vw" />
        <RenderSkill name="PostgresSQL" x="-15vw" y="13vw" />
        <RenderSkill name="TailwindCSS" x="0vw" y="-23vw" />
        <RenderSkill name="SCSS" x="17vw" y="-20vw" />
        <RenderSkill name="React-Native" x="-40vw" y="-4vw" />
        <RenderSkill name="ExpressJS" x="20vw" y="20vw" />
        <RenderSkill name="Bootstrap" x="0vw" y="23vw" />
        <RenderSkill name="mongoDB" x="0vw" y="11vw" />
        <RenderSkill name="Netlify" x="40vw" y="3vw" />
      </div>
    </>
  );
};

export default Skills;
