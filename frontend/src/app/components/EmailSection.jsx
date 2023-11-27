"use client";
import React, { useState } from "react";
import Image from "next/image";
import GithubIcon from "../../../public/images/github.svg";
import LinkedInIcon from "../../../public/images/linkedin.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endPoint = "/api/send";
    const options = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    const response = await fetch(endPoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
      e.target.reset();
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div>
        <h5 className="text-xl font-bold text-light my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for an oppurtunities, my inbox is alway open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <motion.a
            href="https://github.com/ManiKanta9578/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mani-kanta-kotni"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </motion.a>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-light block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john@xyz.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-light block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-light block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-light font-medium py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
