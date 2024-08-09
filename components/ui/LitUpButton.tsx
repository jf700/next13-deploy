import React from "react";

const LitUpButton = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="p-[3px] relative w-full md:w-60 md:mt-10 lg:mt-6 mt-5 sm:w-70 lg:w-78"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-slate-300 rounded-md" />
      <div
        className={`px-10 py-3  bg-black rounded-[5px]  relative group transition duration-300 text-white hover:bg-transparent hover:text-black font-bold ${otherClasses}`}
      >
        {title}
      </div>
    </button>
  );
};

export default LitUpButton;
