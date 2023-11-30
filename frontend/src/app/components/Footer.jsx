import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent dark:text-light text-dark">
      <div className="container flex items-center justify-between my-2 px-5">
        <span className="dark:text-light text-dark text-2xl md:text-xl font-semibold border dark:border-light border-dark rounded-full p-2 md:mr-4 md:mb-0 mb-4">MK</span>
        <p className="text-center md:text-left text-dark dark:text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
