/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillDataProvider = ({ src, width, height, index, name }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.25 },
  };
  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="relative flex flex-col items-center group"
    >
      <motion.img
        src={src}
        width={width}
        height={height}
        whileHover="hover"
        variants={imageVariants}
        alt="skill image"
        className="mb-2"
      />
      <span
        className="absolute bottom-0 translate-y-full bg-gray-800 text-white text-sm text-center py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-white dark:text-black"
      >
        {name}
      </span>
    </motion.div>
  );
};

export default SkillDataProvider;
