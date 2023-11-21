"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <div className="flex flex-col text-white">
      <h3 className="capitalize font-bold text-2xl">
        {position} &nbsp;
        <a
          href={companyLink}
          target="_blank"
          className="capitalize text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
        >
          @{company}
        </a>
      </h3>
      <span className="capitalize font-medium text-slate-400">
        {time} | {address}
      </span>
      <p className="font-normal w-full">{work}</p>
    </div>
  );
};

const ExpDetails = [
  {
    position: "Software Developer",
    company: "ZingHR",
    companyLink: "www.zinghr.com",
    time: "Aug,2023 to present",
    address: "Mumbai, Maharastra",
    work: "Worked on a team responsible for developing new features HCM product for various clients including improving accuracy and friendly UI.",
  },
  {
    position: "Software Developer",
    company: "AlmaBetter",
    companyLink: "www.almabetter.com",
    time: "Aug,2022 to Aug,2023",
    address: "Bangalore, Karnataka",
    work: "Worked on a team responsible for developing new features HCM product for various clients including improving accuracy and friendly UI. ",
  },
  {
    position: "IT Recruiting",
    company: "Primus Global Technologies Pvt Ltd",
    companyLink: "www.primusglobal.com",
    time: "Aug,2021 to Aug,2022",
    address: "Mumbai",
    work: "Worked on a team responsible for developing new features HCM product for various clients including improving accuracy and friendly UI. ",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const sectionStyle = {
    width: '75%',
    margin: '0 auto',
  };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 3,
  };

  return (
    <section style={sectionStyle} id="experience">
      <h2 className="font-bold text-4xl text-white mb-10 w-full  text-center">
        Experience
      </h2>

      <ul
        ref={ref}
        style={listStyle}
      >
        {ExpDetails.map((experience, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Details
              position={experience.position}
              company={experience.company}
              companyLink={experience.companyLink}
              time={experience.time}
              address={experience.address}
              work={experience.work}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
