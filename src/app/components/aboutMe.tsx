import Image from "next/image";
import { playfair_display } from "../fonts";

const star_icon = "/shooting_star.svg";

const HEADER_CONTAINER_STYLES = "p-2 border border-white rounded-full flex justify-center items-center";

const AboutMe = () => {
  return(
    <div className="md:px-28 p-10 ml:p-0 ml:w-[40%]">
      <div className="flex h-full items-center shadow-lg flex-col bg-deep-blue rounded-2xl p-8 text-white">
        <div className="flex w-full">
          <div className={`px-3 md:px-5 ${HEADER_CONTAINER_STYLES}`}>
            <Image src={star_icon} height={35} width={35} alt="Star icon" className="size-6"/>
          </div>
          <div className="w-full px-2">
            <div className={`text-center ${HEADER_CONTAINER_STYLES}`}>
                <i className={`text-xl md:text-4xl ${playfair_display.className}`}>ABOUT ME</i>
            </div>
          </div>
        </div>
        <p className="p-2 mt-4 leading-[1.8] font-light">Hello! My name is Hanna and welcome to my personal website. I am currently a third-year Software Engineering student at the University of Calgary. I have a strong interest in web development and love exploring new ways to combine it with graphic design to make unique and engaging user experiences. I hope you enjoy looking around!</p>
      </div>
    </div>
  )
}

export default AboutMe;

