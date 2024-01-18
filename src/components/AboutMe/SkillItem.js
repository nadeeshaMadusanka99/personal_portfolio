// import React, { useState } from "react";
// import styled from "styled-components";

// const SkillCard = styled.div`
//   width: 100%;
//   max-width: 100%;
//   background: ${({ theme }) => theme.card};
//   border: 0.5px solid #000000;
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
//   transition: transform 0.5s;
//   transform-style: preserve-3d;
//   &:hover {
//     transform: rotateY(180deg);
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

// const SkillItem = ({ title, skills }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleCardFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <SkillCard onClick={handleCardFlip} className={isFlipped ? "flipped" : ""}>
//       <SkillTitle>{title}</SkillTitle>
//       <SkillList>
//         {skills.map((item, index) => (
//           <div key={index}>{item.name}</div>
//         ))}
//       </SkillList>
//     </SkillCard>
//   );
// };

// export default SkillItem;
