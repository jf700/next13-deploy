import { projects } from "@/data";
import React from "react";
import { HoverEffect } from "./ui/CardHoverEffect";

const RecentProjects = () => {
  return (
    <div className="py-20 mt-64">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-sky-200">recent projects</span>
      </h1>
      <div className="flex justify-center mt-7">
        <hr className="border-[1.1px] border-slate-700 w-[55rem] " />
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <HoverEffect
          items={projects.map((project) => ({
            ...project,
            image: (
              <div>
                {project.iconLists.map((icon, index) => (
                  <div key={index}>
                    <img src={icon} alt={`icon-${index}`} />
                  </div>
                ))}
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default RecentProjects;
