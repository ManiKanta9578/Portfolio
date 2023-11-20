"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cryptocurrency Dashboard",
    description: "The cryptocurrency dashboard app, developed with React 18, Tailwind CSS, React-redux, Redux-thunk, React-chartjs-2, and Chart.js 3, serves as a digital platform for tracking and managing cryptocurrency assets. It integrates with the CoinGecko API to provide real-time data on live prices, trading volume, historical information, and more. Users can monitor their crypto portfolios and make informed financial decisions through this desktop and mobile-friendly application.",
    image: "/images/projects/CryptoDashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ManiKanta9578/Cryptocurrency_Dashboard.git",
    previewUrl: "https://cryptocurrencydashboard.netlify.app/",
  },
  {
    id: 2,
    title: "Get Youtube Subscribers",
    description: "The YouTube Subscribers backend is a Node.js project using Express, Mongoose, and MongoDB. It offers a RESTful API for retrieving YouTube subscriber data, providing endpoints for all subscribers, subscriber details by ID, and subscriber names with subscribed channels. The project is designed to handle errors and serves as a foundation for expanding into a more comprehensive application, potentially integrating with the YouTube API for additional features like subscriber management and channel data retrieval.",
    image: "/images/projects/backendProject.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ManiKanta9578/YouTube_Subscribers.git",
    previewUrl: "https://youtube-subscribers-livid.vercel.app/",
  },
  {
    id: 3,
    title: "Reserve Bus booking",
    description: "The Reserve Bus website, built with the MERN stack, enables users to easily book bus seats. Using MongoDB, Express.js, React, and Node.js, the platform offers a smooth reservation experience with features like route selection and bus details.",
    image: "/images/projects/Reserve-Bus.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ManiKanta9578/Reserve-Bus.git",
    previewUrl: "https://reserve-bus.netlify.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="md:py-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
