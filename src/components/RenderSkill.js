import {motion} from "framer-motion";


export const RenderSkill = ({name,x,y})=>{
    return( 
    <motion.div
             className="flex items-center justify-center flex-col rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute"
             whileHover={{ scale: 1.05 }}
             initial = {{X:0,y:0}}
             animate={{x:x,y:y}}
             transition={{duration:1.5}}
             viewport={{once: true}}
           >
             {name}
           </motion.div>)
   }