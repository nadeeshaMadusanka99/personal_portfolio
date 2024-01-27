/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SkillDataProviderMobile = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    tap: { scale: 1.3 }, 
  };

  const animationDelay = 0.5;
  const tapTransition = { duration: 0.01 }; 

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: animationDelay}}
    >
      <motion.img
        src={src}
        width={width}
        height={height}
        whileTap="tap"
        variants={imageVariants}
        alt="skill image"
        style={{ transition: `transform ${tapTransition.duration}s ease-out`}}
      />
    </motion.div>
  );
};

export default SkillDataProviderMobile;
