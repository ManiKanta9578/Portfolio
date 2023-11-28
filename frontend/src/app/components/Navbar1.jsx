"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useTheme } from "next-themes";

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
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="fixed w-full px-32 py-8 font-medium text-dark dark:text-light flex flex-row items-center justify-between">
      <nav>
        <CustomLink href={"/"} title="Home" className="mr-4" />
        <CustomLink href={"#about"} title="About" className="mx-4" />
        <CustomLink href={"#projects"} title="Projects" className="mx-4" />
      </nav>
      <h2>MK</h2>
      <nav>
        {currentTheme === "dark" ? (
          <button onClick={() => setTheme("light")}>Light</button>
        ) : (
          <button onClick={() => setTheme("dark")}>Dark</button>
        )}
      </nav>
    </header>
  );
};

export default Navbar1;
