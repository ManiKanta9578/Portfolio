"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const mobileMaxLines = 100;

  const [showMore, setShowMore] = useState(!isMobile);

  const toggleShowMore = useCallback(() => {
    setShowMore((prevShowMore) => !prevShowMore);
  }, []);

  const maxLines = isMobile ? mobileMaxLines : work;
  const truncatedWork = showMore ? work : `${work.slice(0, maxLines)}...`;

  useEffect(() => {
    setShowMore(!isMobile);
  }, [isMobile]);

  return (
    <div className="flex flex-col text-light">
      <h3 className="capitalize font-bold text-lg lg:text-2xl">
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
      <p className="font-normal w-full">
        {truncatedWork}
        {isMobile && work.length > mobileMaxLines && (
          <button
            className="font-normal underline cursor-pointer"
            onClick={toggleShowMore}
          >
            {showMore ? "View Less" : "View More"}
          </button>
        )}
      </p>
    </div>
  );
};

const ExpDetails = [
  {
    position: "Software Developer",
    company: "ZingHR",
    companyLink: "https://www.zinghr.com/",
    time: "Aug,2023 to present",
    address: "Mumbai, Maharastra",
    work: "Design and implement reusable React components for efficient user interfaces.Manage application state using Redux or React Context API for seamless data flow.Integrate React applications with back-end services through RESTful or GraphQL APIs.Write clean, documented code, conduct testing, and collaborate with QA for bug fixes, ensuring application reliability.",
  },
  {
    position: "Web Developer",
    company: "AlmaBetter",
    companyLink: "https://www.almabetter.com/",
    time: "Aug,2022 to Aug,2023",
    address: "Bangalore, Karnataka",
    work: "Build responsive and user-friendly interfaces with React.js. Manage state using React's tools for optimal performance Perform CRUD operations and optimize database performance.Implement and maintain database security measures.Communicate effectively for project understanding and delivery.Develop server-side logic using Node.js and Express.js.",
  },
  {
    position: "IT Recruiter",
    company: "Primus Global Technologies Pvt Ltd",
    companyLink: "https://primusglobal.com/",
    time: "Aug,2021 to Aug,2022",
    address: "Visakhapatnam, Andhra Pradesh",
    work: "Source and assess candidates for IT positions through various channels.Conduct initial screening interviews and evaluate technical skills. Build positive relationships with candidates, providing feedback and updates. Ensure a smooth and positive candidate experience. Partner with hiring managers to understand technical requirements and refine job descriptions. Provide guidance on market trends and salary benchmarks. Manage end-to-end recruitment processes using ATS and other tools. Stay updated on industry trends and changes in the IT job market.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="font-bold text-4xl w-full text-center md:text-6xl text-light mb-5 mt-24">
        Experience
      </h2>

      <ul
        ref={ref}
        className="flex flex-col justify-center items-center gap-8 lg:w-[50vw] sm:w-full"
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
