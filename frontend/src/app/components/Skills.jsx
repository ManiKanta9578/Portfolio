"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-normal shadow-light cursor-pointer absolute 
      
      md:bg-light md:dark:bg-dark 
      lg:dark:bg-light lg:bg-dark 
      xl:dark:bg-light  xl:bg-dark 
      dark:text-light text-dark
      lg:text-light lg:dark:text-dark
      px-0 py-0 lg:px-3 lg:py-2"
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
      <h2 className="font-bold text-4xl w-full text-center md:text-6xl text-dark dark:text-light mb-5">
        Skills
      </h2>
      <div
        className="lg:w-[80vw] w-full h-[50vh] lg:h-screen md:h-[100vh] sm:h-[100vh]  relative flex items-center justify-center rounded-full 
        bg-circularLight dark:bg-circularDark 
        lg:dark:bg-circularDarkLg lg:bg-circularLightLg
        md:dark:bg-circularDarkMd md:bg-circularLightMd
        sm:dark:bg-circularDarkSm sm:bg-circularLightSm
        xs:circularDarkXs"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold  p-2 shadow-light bg-dark dark:bg-light text-light dark:text-dark cursor-pointer lg:p-6 md:p-4 xs:p-2 text-sm sm:text-lg sm:p-3 "
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
