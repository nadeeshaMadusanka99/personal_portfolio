import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen  flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center flex-col rounded-full font-semibold bg-dark text-light px-5 py-3 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-center">
            Web <br /> & <br /> Mobile
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
