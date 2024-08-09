import React from "react";
import { Card, CardDemo } from "./ui/Card";
import { RiComputerLine } from "react-icons/ri";
import { FaPython, FaRegFileCode } from "react-icons/fa";
import { SiXcode } from "react-icons/si";
import FadeIn from "./ui/fade-in/FadeIn";

const Specialities = () => {
  return (
    <FadeIn>
      <div className="mt-72">
        <h1 className="text-5xl font-mono tracking-tight text-center">
          My <span className="text-sky-200">Specialities</span>
        </h1>
        <div className="flex justify-center mt-4">
          <hr className="border-[1.1px] border-slate-700 w-[25rem] " />
        </div>

        <div className="flex mt-20 justify-around gap-2">
          <div className="hover:-translate-y-7 ease-in-out duration-500">
            <CardDemo
              title={"Software Development"}
              message={
                "Experienced in Python, Java, TypeScript, Linux, and many more languages"
              }
              icon={<RiComputerLine size={50} />}
            />
          </div>
          <div className="hover:-translate-y-7 ease-in-out duration-500">
            <CardDemo
              title={"Frontend Development"}
              message={
                "Extremely passionate about UI/UX, 2-3 years experience with HTML, CSS, TS, React, and NextJS"
              }
              icon={<FaRegFileCode size={50} />}
            />
          </div>
          <div className="hover:-translate-y-7 ease-in-out duration-500">
            <CardDemo
              title={"iOS Development"}
              message={
                "Skilled in developing user-friendly mobile apps through Swift, with an emphasis on AI integration"
              }
              icon={<SiXcode size={50} />}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Specialities;
