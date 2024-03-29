import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      staggerChildren:0.18
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
    return (
      <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 md:py-0">
        <motion.h1
          className={`inline-block w-full text-dark font-extrabold dark:text-light ${className}`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split("\n").map((line, lineIndex) => (
            <React.Fragment key={line + "" + lineIndex}>
              {lineIndex > 0 && <br />} 
              {line.split(" ").map((word, index) => (
                <motion.span
                  key={word + "" + index}
                  className="inline-block"
                  variants={singleWord}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </React.Fragment>
          ))}
        </motion.h1>
      </div>
    );
  };

export default AnimatedText;