import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  MediumIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../Hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block inline-2 bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About Me" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact_me" title="Contact Me" className="ml-4" />
      </nav>

      <nav className="flex justify-center items-center">
        <motion.a
          href="https://www.facebook.com/nadeesha.madusanka.5648/"
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
          href="https://www.linkedin.com/in/nadeesha-madusanka-5454b2246/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://medium.com/@nadeeshamadusanka44"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 w-6"
        >
        {mode==="dark" ? <MediumIcon className={"fill-light"} /> : <MediumIcon className={"fill-dark"} /> }
        </motion.a>
        {/* <motion.div
          initial={{ height: 0 }}
          animate={{ height: 30 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.5 }}
          whileHoverTransition={{ duration: 0.1, ease: "easeInOut" }}
          className="border-2 ml-5 mr-2 items-center w-[1px]  border-black dark:border-light"
        /> */}

        <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
      </nav>
    </header>
  );
};

export default NavBar;
