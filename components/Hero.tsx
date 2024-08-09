import { LampDemo } from "./ui/Lamp";
import { BsArrowDownShort } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="-mt-24 translate-x-4 ">
      <LampDemo />
      <div className="flex justify-center gap-1">
        <p className="text-xl">scroll down</p>
        <BsArrowDownShort
          className="mt-1 animate-bounce"
          size={29}
          color="#6bedff"
        />
      </div>
    </div>
  );
};

export default Hero;
