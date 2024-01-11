import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MediumIcon, FacebookIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block inline-2 bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex justify-center items-center">
        <motion.a
          href="https://github.com/nadeeshaMadusanka99"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="mr-3 w-6"
        >
          <FacebookIcon />
        </motion.a>
        <motion.a
          href="https://github.com/nadeeshaMadusanka99"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://github.com/nadeeshaMadusanka99"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/nadeeshaMadusanka99"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 w-6"
        >
          <MediumIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
