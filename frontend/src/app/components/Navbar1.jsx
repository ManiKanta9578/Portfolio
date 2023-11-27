import Link from "next/link";
import React from "react";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group:`}>
      {title}
      <span className="h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
      &#160;
      </span>
    </Link>
  );
};

const Navbar1 = () => {
  return (
    <header className="w-full px-32 py-8 font-medium text-light flex flex-row items-center justify-between">
      <nav>
        <CustomLink href={"/"} title="Home" className="mr-4" />
        <CustomLink href={"#about"} title="About" className="mx-4" />
        <CustomLink href={"#projects"} title="Projects" className="mx-4" />
      </nav>
      <h2>MK</h2>
      <nav>
        <Link href={"/"} target="_blank">
          T
        </Link>
        <Link href={"/"} target="_blank">
          T
        </Link>
      </nav>
    </header>
  );
};

export default Navbar1;
