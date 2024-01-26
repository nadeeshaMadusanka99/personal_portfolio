import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
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
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(e);
    router.push(href);
  };

  return (
    <div
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      <button>
        {title}
        <span
          className={`h-[1px] inline-block inline-2 bg-light absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 
          ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
        >
          &nbsp;
        </span>
      </button>
    </div>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const popUP = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event) {
      if (popUP.current && !popUP.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    // clean up
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleClick = (e) => {
    console.log("clicked");
    console.log(isOpen);
    setIsOpen(!isOpen);
    e.stopPropagation();
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={(e) => handleClick(e)}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-400 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? `rotate-45 translate-y-1` : `-translate-y-0.5`
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-400 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? `opacity-0` : `opacity-100`
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-400 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
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
            {mode === "dark" ? (
              <MediumIcon className={"fill-light"} />
            ) : (
              <MediumIcon className={"fill-dark"} />
            )}
          </motion.a>
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
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          ref={popUP}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-w-[70vw] flex flex-col justify-center z-30 items-center fixed top-1/2 
         left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink toggle={handleClick} href="/" title="Home" />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title="About Me"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/contact_me"
              title="Contact Me"
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-5">
            <motion.a
              href="https://www.facebook.com/nadeesha.madusanka.5648/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-5 sm:mx-1.5 "
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://github.com/nadeeshaMadusanka99"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-5 bg-light rounded-full dark:bg-dark sm:mx-1.5"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nadeesha-madusanka-5454b2246/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-5 sm:mx-1.5"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://medium.com/@nadeeshamadusanka44"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-5 sm:mx-1.5"
            >
              {mode === "dark" ? (
                <MediumIcon className={"fill-dark"} />
              ) : (
                <MediumIcon className={"fill-light"} />
              )}
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark lg:w-6 lg:h-6"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
