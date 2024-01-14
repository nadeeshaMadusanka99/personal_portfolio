import React from "react";
import { motion } from "framer-motion";
// import {RenderSkill} from "@/components/RenderSkill"
import styled from "styled-components";
import { skills } from "@/components/RenderSkill";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 10rem;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  ${
    "" /* @media (max-width: 960px) {
    flex-direction: column;
  } */
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  ${
    "" /* @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  } */
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  ${
    "" /* @media (max-width: 768px) {
    font-size: 16px;
  } */
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 100px;
  ${"" /* padding: 100px; */}
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 100%;
  background: ${({ theme }) => theme.card};
  border: 0.5px solid #000000;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  ${
    "" /* @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  } */
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${
    "" /* @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  } */
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  // return (
  //   <>
  //     <h2 className="font-bold text-8xl mt-20 mb-10 w-full text-center">Skills</h2>
  //     <div className="w-full h-screen  flex items-center justify-center rounded-full bg-circularLight">
  //       <motion.div
  //         className="flex items-center justify-center flex-col rounded-full font-semibold bg-dark text-light px-5 py-3 shadow-dark cursor-pointer"
  //         whileHover={{ scale: 1.05 }}
  //       >
  //         <span className="text-center">
  //           Web <br /> & <br /> Mobile
  //         </span>
  //       </motion.div>
  //       <RenderSkill name="CSS" x="-5vw" y="-11vw" />
  //       <RenderSkill name="HTML" x="-20vw" y="2vw" />
  //       <RenderSkill name="Javascript" x="-20vw" y="2vw" />
  //       <RenderSkill name="ReactJS" x="-20vw" y="-15vw" />
  //       <RenderSkill name="NextJS" x="15vw" y="-12vw" />
  //       <RenderSkill name="Figma" x="32vw" y="-5vw" />
  //       <RenderSkill name="MongoDB" x="-25vw" y="18vw" />
  //       <RenderSkill name="mySQL" x="18vw" y="6vw" />
  //       <RenderSkill name="PostgresSQL" x="-15vw" y="13vw" />
  //       <RenderSkill name="TailwindCSS" x="0vw" y="-23vw" />
  //       <RenderSkill name="SCSS" x="17vw" y="-20vw" />
  //       <RenderSkill name="React-Native" x="-40vw" y="-4vw" />
  //       <RenderSkill name="ExpressJS" x="20vw" y="20vw" />
  //       <RenderSkill name="Bootstrap" x="0vw" y="23vw" />
  //       <RenderSkill name="mongoDB" x="0vw" y="11vw" />
  //       <RenderSkill name="Netlify" x="40vw" y="3vw" />
  //     </div>
  //   </>
  // );
  return (
    <Container id="skills">
      <Wrapper>
        <h2 className="font-bold text-7xl  mb-20 w-full text-center">Skills</h2>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <SkillsContainer>
            {skills.map((skill, index) => (
              <Skill key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Skills;
