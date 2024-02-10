import React, { useEffect, useState } from "react";
import SkillDataProvider from "./SkillDataProvider";
import { motion } from "framer-motion";
import {
  mobileRender,
  row1,
  row2,
  row3,
  row4,
  row5,
  row6,
} from "@/content/RenderSkills";
import SkillDataProviderMobile from "./SkillDataProviderMobile";

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1375);
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
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
        className="font-bold text-7xl text-secondary mb-20 w-full text-center md:text-6xl sm:mb-10 sm:text-5xl"
      >
        Tech Stack
      </motion.h2>
      {isSmallScreen ? (
        <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
          {mobileRender.map((image, index) => (
            <SkillDataProviderMobile
              key={index}
              src={image.image}
              index={index}
            />
          ))}
        </div>
      ) : (
        <>
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
          <div className="flex flex-row justify-around flex-wrap mt-9 gap-12 items-center">
            {row6.map(
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
        </>
      )}
    </section>
  );
};

export default Skills;
