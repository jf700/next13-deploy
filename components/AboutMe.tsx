import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import Image from "next/image";
import FadeIn from "./ui/fade-in/FadeIn";

import { Button } from "./ui/MovingBorder";
import { FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <FadeIn>
      <div className="mt-40">
        <div className="flex flex-col justify-center ">
          <h1 className="text-4xl md:text-5xl font-mono tracking-tight text-center">
            About Me
          </h1>
          <div className="flex justify-center mt-4">
            <hr className="border-[1.1px] border-slate-700 w-[18rem] " />
          </div>

          <h3 className="text-lg md:text-xl mt-5 text-slate-500 text-center">
            Who I Am
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-20 md:gap-10">
          <div className="flex flex-col gap-10 items-center justify-center lg:ml-40">
            <Image
              src="/images/IMG_6386 (1).png"
              width={350}
              height={350}
              alt="me"
            />
            <a target="_blank" href="https://www.linkedin.com/in/joshua-fuery/">
              <Button borderRadius="12px">
                <span className="font-bold">My Linked</span>
                <FaLinkedin
                  size={18}
                  className="mb-[0.07rem]"
                  color="lightblue"
                />
              </Button>
            </a>
          </div>
          <div className="mr-0 md:mr-10 mt-16 md:mt-0 ">
            <div className="flex flex-row md:gap-8 gap-3 justify-end text-center">
              <div className="flex flex-col justify-center border-2 border-slate-400 rounded-2xl p-8">
                <MdOutlineWorkHistory size={27} className="self-center" />
                <h2 className="text-lg font-bold text-sky-100">Experience</h2>
                <p className="text-sm text-sky-200">3 Years</p>
              </div>
              <div className="flex justify-center flex-col border-2 border-slate-400 rounded-2xl p-8">
                <PiStudentBold size={27} className="self-center" />
                <h2 className="text-lg font-bold text-sky-100">Student</h2>
                <p className="text-sm text-sky-200">Chapman University</p>
              </div>
              <div className="flex flex-col justify-center border-2 border-slate-400 rounded-2xl p-8">
                <MdOutlineDesignServices size={27} className="self-center" />
                <h2 className="text-lg font-bold text-sky-100">Dev/Des</h2>
                <p className="text-sm text-sky-200">10+ Projects</p>
              </div>
            </div>
            <p className="flex justify-end mt-10 text-lg font-mono md:text-start text-center max-w-md md:max-w-xl">
              What&apos;s up! I&apos;m Josh, a prospective student developer
              based out of Southern California who is currently working towards
              a bachelors degree in Sofware Engineering.
              <br /> <br /> If you don&apos;t see me coding, I&apos;m probably
              at the gym, or flying around my drones in my free time. I enjoy
              all things tech and fitness, and love picking up new skills
              (currently on my pickleball wave), so if you want to reach out and
              talk anything related to those I&apos;d love to hear your input.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutMe;
