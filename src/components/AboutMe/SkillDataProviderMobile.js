"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SkillDataProviderMobile = ({ src, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
    tap: { scale: 1.2 },
  };

  const animationDelay = 0.4;
  const tapTransition = { duration: 0.02 };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      custom={index}
      transition={{ delay: animationDelay }}
      animate={inView ? "visible" : "hidden"}
    >
      <motion.img
        src={src}
        width={60}
        height={60}
        whileTap="tap"
        variants={imageVariants}
        alt="skill image"
        style={{ transition: `transform ${tapTransition.duration}s ease-out` }}
      />
    </motion.div>
  );
};

export default SkillDataProviderMobile;
