// import React from "react";
// import { motion, useScroll } from "framer-motion";
// import LiIcon from "./LiIcon";
// import { dataExperience } from "@/content/Experience";

// const Details = ({ position, company, companyLink, time, address, work }) => {
//   const ref = React.useRef(null);
//   return (
//     <li
//       ref={ref}
//       className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
//     >
//       <LiIcon reference={ref} />
//       <motion.div
//         initial={{ y: 50 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 0.5, type: "spring" }}
//       >
//         <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
//           {position}&nbsp;
//           <a
//             href={companyLink}
//             target="_blank"
//             className="text-primary capitalize"
//           >
//             {company}
//           </a>
//         </h3>
//         <span className="capitalize font-medium text-dark/75">
//           {time} | {address}
//         </span>
//         <p className="font-medium w-full">{work}</p>
//       </motion.div>
//     </li>
//   );
// };

// const Experience = () => {
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center start"],
//   });
//   return (
//     <>
//       <div className="my-40">
        
//       <h2 className="font-bold text-6xl mt-20 mb-20 w-full text-center">Experience</h2>
//         <div
//           ref={ref}
//           className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
//         >
//           <motion.div
//             style={{ scaleY: scrollYProgress }}
//             className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
//           />
//           <ul className="w-full flex flex-col items-start justify-between ml-4">
//             {dataExperience.map((edu, id) => (
//               <Details
//                 key={id}
//                 position={edu.position}
//                 company={edu.company}
//                 companyLink={edu.companyLink}
//                 time={edu.time}
//                 address={edu.address}
//                 work={edu.work}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Experience;