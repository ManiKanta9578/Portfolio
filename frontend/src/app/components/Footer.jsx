import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-light">
      <div className="container p-9 flex justify-between">
        <span className="text-light text-2xl md:text-xl font-semibold border border-light rounded-full p-2">MK</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;