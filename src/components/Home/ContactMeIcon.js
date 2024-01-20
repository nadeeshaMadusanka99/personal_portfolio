import React from "react";
import { CircularText } from "../Common/Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactMeIcon = () => {
  const MotionLink = motion(Link);
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center 
    overflow-hidden"
    >
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText
          className="fill-dark animate-spin-slow dark:fill-light "
          //   style={{ fontSize: "66px" }}
        />
        <MotionLink
          href="/contact_me"
          className="flex items-center justify-center absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid
         border-dark w-[85px] h-[85px] rounded-full font-semibold hover:bg-light hover:text-dark
          hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark
           hover:dark:text-light hover:dark:border-light"
        >
          <div className="text-center">
            Contact <br /> Me
          </div>
        </MotionLink>
      </div>
    </div>
  );
};

export default ContactMeIcon;
