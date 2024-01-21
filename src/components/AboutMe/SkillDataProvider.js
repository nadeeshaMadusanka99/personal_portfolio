/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SkillDataProvider = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.25 },
  };

  const animationDelay = 0.2;
  const hoverTransition = { duration: 0.01 }; 

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay}}
    >
      <motion.img
        src={src}
        width={width}
        height={height}
        whileHover="hover"
        variants={imageVariants}
        alt="skill image"
        style={{ transition: `transform ${hoverTransition.duration}s ease-out`}}
      />
    </motion.div>
  );
};

export default SkillDataProvider;
