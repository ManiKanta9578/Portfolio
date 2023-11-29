"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AchievementsSection from "./AchievementsSection";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Jntuk</li>
        <li>Bharathiyar University, coimbatoir</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Development</li>
        <li>Programming with JavaScripts</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-dark dark:text-light ">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2 className="font-bold text-4xl w-full text-center md:text-6xl text-dark dark:text-light mb-1">About Me</h2>
        <div className="md:grid md:grid-cols-5 gap-8 items-center justify-start py-8 px-4 xl:gap-16 xl:px-16 h-full">
          <Image
            src={"/images/PhotoH.jpg"}
            width={500}
            height={500}
            className="object-cover rounded-md col-span-2"
            // layout="responsive"
            alt="My Imahe"
          />
          <div className="col-span-2 mt-9 md:mt-0 text-left flex flex-col h-full">
            <p className="text-base lg:text-lg">
              I'm a skilled MERN Stack Developer adept at turning innovative
              ideas into user-friendly web applications. With expertise in
              MongoDB, Express.js, React.js, and Node.js, I excel in creating
              seamless, dynamic solutions. My focus is on clean, efficient code,
              and I'm always exploring new technologies to stay ahead. Let's
              bring your digital vision to life!
            </p>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  Certifications
                </TabButton>
              </div>
              <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}{" "}
              </div>
            </div>
          </div>
              <AchievementsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
