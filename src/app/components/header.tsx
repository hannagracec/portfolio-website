import React, { useState } from "react";
import Image from "next/image";

const header_star = "/header_star.svg";

interface HeaderProps {
  aboutMeScroll: () => void;
  projectsScroll: () => void;
  experienceScroll: () => void;
  contactMeScroll: () => void;
}

const HEADER_BUTTON_STYLES = "border border-black-ish rounded-full text-lg px-4 mx-2 hover:bg-black-ish hover:text-white transition-colors";

const Header: React.FC<HeaderProps> = ({
  aboutMeScroll,
  projectsScroll,
  experienceScroll,
  contactMeScroll,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleButtonClick = (scrollFunction: () => void) => {
    scrollFunction();
    setDropdownOpen(false); 
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="p-4 w-full flex justify-center">
        <div className="hidden md:flex max-w-[1200px] justify-between items-center md:min-w-[750px] w-[80%] md:bg-white py-2 px-12 rounded-3xl flex-nowrap md:shadow-lg">
          <div className="flex mb-4 md:mb-0">
            <Image src={header_star} height={35} width={35} alt="Star icon" />
            <h1 className="text-3xl ml-2 font-bold italic">HANNA</h1>
          </div>

          <div className="space-x-2">
            <button onClick={() => handleButtonClick(aboutMeScroll)} className={HEADER_BUTTON_STYLES}>
                About Me
            </button>
            <button onClick={() => handleButtonClick(projectsScroll)} className={HEADER_BUTTON_STYLES}>
                Projects
            </button>
            <button onClick={() => handleButtonClick(experienceScroll)} className={HEADER_BUTTON_STYLES}>
                Experience
            </button>
            <button onClick={() => handleButtonClick(contactMeScroll)} className={HEADER_BUTTON_STYLES}>
                Contact Me
            </button>
          </div>
        </div>

        <button
          className="md:hidden px-4 bg-black-ish ml-auto mb-4 text-white text-lg rounded-full"
          onClick={toggleDropdown}
        >
          ☰
        </button>

        {isDropdownOpen && (
          <div className="md:hidden absolute left-1/2 transform -translate-x-4 top-14 bg-white rounded-lg shadow-lg p-2 space-y-2">
            <button onClick={() => handleButtonClick(aboutMeScroll)} className={HEADER_BUTTON_STYLES}>
              About Me
            </button>
            <button onClick={() => handleButtonClick(projectsScroll)} className={HEADER_BUTTON_STYLES}>
              Projects
            </button>
            <button onClick={() => handleButtonClick(experienceScroll)} className={HEADER_BUTTON_STYLES}>
              Experience
            </button>
            <button onClick={() => handleButtonClick(contactMeScroll)} className={HEADER_BUTTON_STYLES}>
              Contact Me
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
