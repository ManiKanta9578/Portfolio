"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Herosection = () => {
  const cvDownloadUrl = "/images/Manikanta's Resume.pdf";

  const handleDownload = () => {
    console.log("Download CV button clicked");
  };
  return (
    <section className="lg:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold h-28 sm:h-48">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Manikanta Kotni",
                1000,
                "Web Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "ReactJs Developer",
                1000,
                "NodeJs Developer",
                1000,
              ]}
              wrapper="span"
              className="text-dark dark:text-light"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-dark dark:text-[#ADB7BE] text-base  mb-6 sm:text-lg lg:text-xl">
            Experienced MERN stack developer specializing in React. Crafting
            seamless web experiences with a passion for innovation. Let's build
            something amazing together! Explore my projects and get in touch.
          </p>
          <div>
            <Link href={"#contact"}>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-secondary-500 to-light hover:bg-slate-200 text-light">
                Hire Me
              </button>
            </Link>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-light hover:bg-slate-100 text-dark dark:text-light mt-3"
              onClick={handleDownload}
            >
              <a
                href={cvDownloadUrl}
                download="Manikanta's Resume.pdf"
                className="block bg-light dark:bg-[#121212] hover:bg-slate-100 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 "
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              // src="/images/developer-pic.png"
              src="/images/about.jpg"
              // src="/images/web-developer-img.ico"
              alt="web developer image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
