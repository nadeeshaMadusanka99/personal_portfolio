import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light md:text-base sm:text-sm">
      <Layout className="py-6 flex items-center justify-between lg:flex-col lg:py-6 sm:py-4">
        <span>{new Date().getFullYear()} &copy; ALL Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Crafted With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;{" "}
          <Link
            href="/"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Me
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;