import Link from "next/link";
import React from "react";

const CustomLink = ({ href, title, className = "" }) => {
  return <Link href={href} className={`${className} relative`}>{title}
  <span className="h-[1px] inline-block w-full bg-black absolute left-0 -bottom-0.5">&nbsp;</span>
  </Link>;
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4"/>
        <CustomLink href="/about" title="About" className="mx-4"/>
        <CustomLink href="/projects" title="Projects" className="mx-4"/>
        <CustomLink href="/articles" title="Articles" className="ml-4"/>
      </nav>

      <nav>
        <Link href="/contact">T</Link>
        <Link href="/contact">T</Link>
        <Link href="/contact">T</Link>
        <Link href="/contact">T</Link>
        <Link href="/contact">T</Link>
      </nav>
    </header>
  );
};

export default NavBar;
