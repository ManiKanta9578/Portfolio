import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import GithubIcon from "../../../public/images/github.svg";
import FeaturedProject from "./FeaturedProject";
import Project from "./Project";
// const Reserve = "/frontend/public/images/projects/Reserve-Bus.png";

// type, title, summary, img, previewUrl, gitUrl, gitIcon
const projectsData = [
  {
    id: 1,
    reserveBus: {
      type: "Featured Project",
      title: "Reserve Bus booking",
      summary:
        "The Reserve Bus website, built with the MERN stack, enables users to easily book bus seats. Using MongoDB, Express.js, React, and Node.js, the platform offers a smooth reservation experience with features like route selection and bus details.",
      img: "/images/projects/Reserve-Bus.png",
      gitUrl: "https://github.com/ManiKanta9578/Reserve-Bus.git",
      previewUrl: "https://reserve-bus.netlify.app/",
      gitIcon: "/images/github.png",
    },
    id: 1,
    cryptocurrency: {
      type: "Frontend Project",
      title: "Cryptocurrency Dashboard",
      summary:
        "The cryptocurrency dashboard app, developed with React 18, Tailwind CSS, React-redux, Redux-thunk, React-chartjs-2, and Chart.js 3, serves as a digital platform for tracking and managing cryptocurrency assets. It integrates with the CoinGecko API to provide real-time data on live prices, trading volume, historical information, and more. Users can monitor their crypto portfolios and make informed financial decisions through this desktop and mobile-friendly application.",
      img: "/images/projects/CryptoDashboard.png",
      gitUrl: "https://github.com/ManiKanta9578/Cryptocurrency_Dashboard.git",
      previewUrl: "https://cryptocurrencydashboard.netlify.app/",
      gitIcon: "/images/github.png",
    },
    id: 3,
    youtube: {
      title: "Get Youtube Subscribers",
      type: "Backend Project",
      summary:
        "The YouTube Subscribers backend is a Node.js project using Express, Mongoose, and MongoDB. It offers a RESTful API for retrieving YouTube subscriber data, providing endpoints for all subscribers, subscriber details by ID, and subscriber names with subscribed channels. The project is designed to handle errors and serves as a foundation for expanding into a more comprehensive application, potentially integrating with the YouTube API for additional features like subscriber management and channel data retrieval.",
      img: "/images/projects/backendProject.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ManiKanta9578/YouTube_Subscribers.git",
      previewUrl: "https://youtube-subscribers-livid.vercel.app/",
      gitIcon: "/images/github.png",
    },
  },
];

const Projects = () => {
  return (
    <section className="w-full" id="projects">
      <br></br>
      <div className="dark:text-light text-dark font-semibold">
        <h2 className="mb-16 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl text-4xl text-center">
          Imagination Trump <br /> Knowledge!
        </h2>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-y-12 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 gap-x-0 md:gap-8 lg:gap-12"
          >
            <div className="col-span-12 md:col-span-12 lg:col-span-12">
              <FeaturedProject
                type={project.reserveBus.type}
                title={project.reserveBus.title}
                summary={project.reserveBus.summary}
                img={project.reserveBus.img}
                previewUrl={project.reserveBus.previewUrl}
                gitUrl={project.reserveBus.gitUrl}
                gitIcon={project.reserveBus.gitIcon}
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <Project
                type={project.cryptocurrency.type}
                title={project.cryptocurrency.title}
                summary={project.cryptocurrency.summary}
                img={project.cryptocurrency.img}
                previewUrl={project.cryptocurrency.previewUrl}
                gitUrl={project.cryptocurrency.gitUrl}
                gitIcon={project.cryptocurrency.gitIcon}
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6">
              <Project
                type={project.youtube.type}
                title={project.youtube.title}
                summary={project.youtube.summary}
                img={project.youtube.img}
                previewUrl={project.youtube.previewUrl}
                gitUrl={project.youtube.gitUrl}
                gitIcon={project.youtube.gitIcon}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
