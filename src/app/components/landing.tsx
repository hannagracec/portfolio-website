import { useState, useEffect } from "react";
import { playfair_display } from "../fonts";
import Image from "next/image";

const star_icon = "/filled_star.svg";
const search_icon = "/search_icon.svg";
const background_image = "/background.jpg";

const Landing = () => {
  const [animationClass, setAnimationClass] = useState("opacity-0 translate-y-10");

  useEffect(() => {
    // Trigger animation on component mount
    setAnimationClass("opacity-100 translate-y-0 transition-transform transition-opacity duration-1000");
  }, []);

  return (
    <div
      className="md:p-28 py-20 px-4 flex justify-center w-full"
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`bg-white md:max-w-[1200px] max-w-[500px] w-full rounded-xl shadow-md items-center p-4 justify-center ${animationClass}`}
      >
        <div className="flex justify-end">
          <div className="p-2 border border-black-ish rounded-full size-8 md:size-10 transition-transform duration-500 hover:scale-110">
            <Image src={star_icon} height={25} width={25} alt="Star icon" />
          </div>
        </div>
        <div className="md:mt-16 md:mb-28 pt-8 pb-16 flex flex-col items-center">
          <div className="md:text-[60px] md:mb-8 mb-2 text-4xl text-center">
            <h1 className="font-light">
              Hi, I&apos;m
              <span className={playfair_display.className}>
                <i className="font-semibold text-deep-blue"> Hanna Cho</i>
              </span>
            </h1>
          </div>
          <div className="border items-center border-black-ish rounded-full flex px-4 md:py-2 py-1 w-full md:max-w-[500px] max-w-[350px] transition-transform duration-500 hover:scale-105">
            <Image src={search_icon} height={25} width={25} alt="Search icon" className="md:size-6 size-4" />
            <div className="w-full md:text-2xl text-sm text-center">
              <p className="typing-effect">SOFTWARE ENGINEERING STUDENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
