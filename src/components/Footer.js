import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-6 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; ALL Rights Reserved.</span>
        <div className="flex items-center">
          Crafted With{" "}
          <span className="text-primary text-2xl px-1">
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