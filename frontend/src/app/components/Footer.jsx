import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent dark:text-light text-dark">
      <div className="container p-9 flex justify-between">
        <span className="dark:text-light text-dark text-2xl md:text-xl font-semibold border dark:border-light border-dark rounded-full p-2">MK</span>
        <p className="text- text-dark dark:text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;