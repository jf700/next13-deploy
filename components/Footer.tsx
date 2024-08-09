import React from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-72 h-40  w-full text-slate-500 gap-2">
      <FaCode size={30} />
      <p className="font-mono">Copyright Josh Fuery 2024</p>
    </div>
  );
};

export default Footer;
