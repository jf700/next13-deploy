import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mt-72">
      <div className="header-div">
        <h1 className="font-mono text-5xl text-center tracking-tight">
          Contact Me
        </h1>
        <div className="flex justify-center mt-4">
          <hr className="border-[1.1px] border-slate-700 w-[20rem] " />
        </div>
        <h3 className="text-lg text-center mt-5 text-slate-500">Reach Out</h3>
      </div>
      <div className="body-div flex flex-col gap-5 items-center mt-10">
        <a target="_blank" href="mailto:joshfuery@gmail.com">
          <div className="flex gap-1 border-2 rounded-lg border-white py-3 w-96 justify-center hover:bg-white cursor-pointer hover:text-slate-700 transition ease-in-out duration-500 hover:translate-x-4">
            <IoMailOutline size={28} className="mt-[0.2rem]" />

            <button className="text-2xl">Email</button>
          </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/joshua-fuery/">
          <div className="flex gap-1 border-2 rounded-lg border-white py-3 w-96 justify-center hover:bg-white cursor-pointer hover:text-sky-600 transition ease-in-out duration-500 hover:translate-x-4">
            <FaLinkedin size={28} className="mt-[0.2rem]" />
            <button className="text-2xl">LinkedIn</button>
          </div>
        </a>
        <a target="_blank" href="https://www.instagram.com/joshhfuery/?hl=en">
          <div className="flex gap-1 border-2 rounded-lg border-white py-3 w-96 justify-center hover:bg-white cursor-pointer hover:text-rose-500 transition ease-in-out duration-500 hover:translate-x-4">
            <FaInstagram size={28} className="mt-[0.2rem]" />
            <button className="text-2xl">Instagram</button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
