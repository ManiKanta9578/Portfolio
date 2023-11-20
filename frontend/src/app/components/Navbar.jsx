"use client";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const MotionLink = motion(Link);

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [tab, setTab] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <nav className="container fixed mx-auto border border-[#33353F] top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-10 py-2">
        <MotionLink
          href={"/"}
          className="w-12 h-12 text-white text-2xl font-bold border-white border  rounded-full flex items-center justify-center"
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          MK
        </MotionLink>
        <div className="mobile-menu block md:hidden">
          {!openNavbar ? (
            <button
              onClick={() => setOpenNavbar(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpenNavbar(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
        <div className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <TabButton
              selectTab={() => handleTabChange("about")}
              active={tab === "about"}
            >
            <Link href={"#about"} className="text-lg">About</Link>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("projects")}
              active={tab === "projects"}
            >
              <Link href={"#projects"} className="text-lg">Projects</Link>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("contact")}
              active={tab === "contact"}
            >
              <Link href={"#contact"} className="text-lg">Contact</Link>
            </TabButton>
          </div>
        {/*  <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
             {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))} 
          </ul> */}
        </div>
      </div>
      {openNavbar ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
