"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-normal text-light sm:bg-light sm:text-dark sm:font-medium sm:px-2 sm:py-1 md:px-2  text-sm lg:text-lg lg:py-1 lg:px-2 md:text-lg sm:text-base  shadow-light cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="font-bold text-4xl w-full text-center md:text-6xl text-light mb-5">
        Skills
      </h2>
      <div
        className="lg:w-[80vw] w-full h-[50vh] lg:h-screen md:h-[100vh] sm:h-[100vh]  relative flex items-center justify-center rounded-full bg-circularDark
      lg:bg-circularDarkLg md:bg-circularDarkMd sm:bg-circularDarkSm xs:circularDarkXs"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-light text-dark p-2 shadow-light cursor-pointer lg:p-6 md:p-4 xs:p-2 text-sm sm:text-lg sm:p-3 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="11vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-7vw" />
        <Skill name="JavaScript" x="15vw" y="-6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-11vw" y="-15vw" />
        <Skill name="NodeJS" x="-17vw" y="11vw" />
        <Skill name="MongoDB" x="-27vw" y="5vw" />
        <Skill name="Express" x="-16vw" y="-1vw" />
        <Skill name="Mongoose" x="-24vw" y="-10vw" />
        <Skill name="Redux" x="19vw" y="-15vw" />
        <Skill name="Figma" x="0vw" y="-13vw" />
        <Skill name="Material UI" x="20vw" y="5vw" />
        <Skill name="Tailwind CSS" x="19vw" y="14vw" />
      </div>
    </section>
  );
};

export default Skills;
