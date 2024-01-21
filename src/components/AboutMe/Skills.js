// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import styled from "styled-components";
// import { skills } from "@/components/AboutMe/RenderSkill";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
//   margin-top: 7rem;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   ${
//     "" /* @media (max-width: 960px) {
//     flex-direction: column;
//   } */
//   }
// `;

// export const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   ${
//     "" /* @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   } */
//   }
// `;

// export const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   ${
//     "" /* @media (max-width: 768px) {
//     font-size: 16px;
//   } */
//   }
// `;

// const SkillsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 100px;
//   justify-content: center;
// `;

// const Skill = styled.div`
//   width: 100%;
//   max-width: 100%;
//   background: ${({ theme }) => theme.card};
//   border: 0.5px solid #000000;
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
//   ${
//     "" /* @media (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }
//   @media (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   } */
//   }
// `;

// const SkillTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const SkillList = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 17px;
//   margin-bottom: 20px;
// `;

// const SkillItem = styled.div`
//   font-size: 16px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text_primary + 80};
//   border: 1px solid ${({ theme }) => theme.text_primary + 80};
//   border-radius: 12px;
//   padding: 12px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   ${
//     "" /* @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   } */
//   }
// `;

// const SkillImage = styled.img`
//   width: 24px;
//   height: 24px;
// `;
// const SkillCard = styled.div`
//   width: 100%;
//   max-width: 100%;
//   background: ${({ theme }) => theme.card};
//   transition: transform 1.7s;
//   transform-style: preserve-3d;
//   margin-bottom: 5rem;
// `;

// const CardContent = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const FrontContent = styled(CardContent)``;

// const BackContent = styled(CardContent)`
//   transform: rotateY(180deg);
// `;

// const Skills = () => {
 
//   // return (
//   //   <>
//   //     <h2 className="font-bold text-8xl mt-20 mb-10 w-full text-center">Skills</h2>
//   //     <div className="w-full h-screen  flex items-center justify-center rounded-full bg-circularLight">
//   //       <motion.div
//   //         className="flex items-center justify-center flex-col rounded-full font-semibold bg-dark text-light px-5 py-3 shadow-dark cursor-pointer"
//   //         whileHover={{ scale: 1.05 }}
//   //       >
//   //         <span className="text-center">
//   //           Web <br /> & <br /> Mobile
//   //         </span>
//   //       </motion.div>
//   //       <RenderSkill name="CSS" x="-5vw" y="-11vw" />
//   //       <RenderSkill name="HTML" x="-20vw" y="2vw" />
//   //       <RenderSkill name="Javascript" x="-20vw" y="2vw" />
//   //       <RenderSkill name="ReactJS" x="-20vw" y="-15vw" />
//   //       <RenderSkill name="NextJS" x="15vw" y="-12vw" />
//   //       <RenderSkill name="Figma" x="32vw" y="-5vw" />
//   //       <RenderSkill name="MongoDB" x="-25vw" y="18vw" />
//   //       <RenderSkill name="mySQL" x="18vw" y="6vw" />
//   //       <RenderSkill name="PostgresSQL" x="-15vw" y="13vw" />
//   //       <RenderSkill name="TailwindCSS" x="0vw" y="-23vw" />
//   //       <RenderSkill name="SCSS" x="17vw" y="-20vw" />
//   //       <RenderSkill name="React-Native" x="-40vw" y="-4vw" />
//   //       <RenderSkill name="ExpressJS" x="20vw" y="20vw" />
//   //       <RenderSkill name="Bootstrap" x="0vw" y="23vw" />
//   //       <RenderSkill name="mongoDB" x="0vw" y="11vw" />
//   //       <RenderSkill name="Netlify" x="40vw" y="3vw" />
//   //     </div>
//   //   </>
//   // );
//   return (
//     <Container id="skills">
//       <Wrapper>
//         <h2 className="font-bold text-7xl text-secondary mb-28 w-full text-center">Technologies</h2>
//         <SkillsContainer>
//           {skills.map((skill, index) => (
//             <SkillCard
//               key={index}
//             >
//               <FrontContent key={index}>
//                 <motion.div
//                   initial={{ y: 50 }}
//                   whileInView={{ y: 0 }}
//                   transition={{ duration: 0.5, type: "spring" }}
//                   whileHover={{ scale: 1.03 }}
//                   className="w-full max-w-full ring-2 ring-zinc-300 border-2 border-solid border-zinc-500 shadow-lg shadow-zinc-200 rounded-3xl py-10 dark:shadow-md dark:border-zinc-500 dark:bg-card dark:text-light dark:ring-zinc-300 dark:shadow-zinc-200"
//                 >
//                   {/* <div className="text-5xl font-bold text-dark/75 text-center dark:text-light/75">
//                     {skill.title}
//                   </div> */}
//                   <SkillList>
//                     {skill.skills.map((item, index) => (
//                       <SkillItem key={index}>
//                         <SkillImage src={item.image} />
//                         {item.name}
//                       </SkillItem>
//                     ))}
//                   </SkillList>
//                 </motion.div>
//               </FrontContent>
//               {/* <BackContent>
//                 <motion.div
//                   initial={{ y: 50 }}
//                   whileInView={{ y: 0 }}
//                   transition={{ duration: 0.5, type: "spring" }}
//                   // whileHover={{ scale: 1.03 }}
//                   className="w-full max-w-full ring-2 ring-zinc-300 bg-card border-2 border-solid border-zinc-500 shadow-lg shadow-zinc-200 rounded-3xl p-6"
//                 >
                  
//                 </motion.div>
//               </BackContent> */}
//             </SkillCard>
//           ))}
//         </SkillsContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Skills;


import React from "react";
import SkillDataProvider from "./SkillDataProvider";


export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: "/Firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Postger SQL",
    Image: "/postger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    Image: "/prisma.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    Image: "/graphql.png",
    width: 80,
    height: 80,
  },
];

export const Full_stack = [
  {
    skill_name: "React Native",
    Image: "/ReactNative .png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    Image: "/tauri.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },

];

export const Other_skill = [
  {
    skill_name: "Go",
    Image: "/go.png",
    width: 60,
    height: 60,
  },
];

export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },

];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;