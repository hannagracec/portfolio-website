import ProjectTile from "./projectTile";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const code_icon = "/code.svg";
const background_image = "/projectBackground.jpg";

const projects = [
  {
    name: "Boba Tracker",
    cover: "/Projects/bobaTracker.svg",
    about: `Boba Tracker is a web application designed to track and manage your favorite bubble tea drinks 
            across various stores. Key features include user authentication, real-time database interactions, 
            and a responsive design.`,
    skills: "Next.js, Firebase, Tailwind CSS, Figma",
    link: "https://boba-tracker-9639a.web.app/",
    alt: "Boba Tracker logo"
  },
  {
    name: "Portfolio Website",
    cover: "/Projects/portfolio.svg",
    about: `My personal website dedicated to sharing my coding journey, featuring a showcase of my projects, 
            including this site itself. It highlights my work on various personal projects and technical skills.`,
    skills: "Next.js, Tailwind CSS, Figma",
    link: "https://hannagracec.netlify.app/",
    alt: "Hanna's Portfolio logo"
  },
  {
    name: "InkLink",
    cover: "/Projects/inklink.svg",
    about: `A web application built to encourage Calgary residents to visit public libraries, read more, and connect with the community. 
            Integrated an external API to provide real-time updates on nearby libraries, cafes, and scenic spots, promoting reading in various settings`,
    skills: "React, CSS, JavaScript, API",
    link: "https://devpost.com/software/inklink-j67f8h",
    alt: "InkLink logo"
  },
  {
    name: "Clear Currents",
    cover: "/Projects/clearCurrents.svg",
    about: `Designed an interactive website to educate users about the Canadian water crisis and promote sustainability`,
    skills: "JavaScript, HTML, CSS",
    link: "https://ephemeral-torrone-a772be.netlify.app/",
    alt: "Clear Currents logo"
  },
  {
    name: "Catfish Chronicles",
    cover: "/Projects/catChronicles.svg",
    about: `Created a handheld gaming console featuring an LCD screen and joystick . Contributed to the game's design and mechanics focusing on player interaction`,
    skills: "Arduino, C, Fusion360",
    link: "https://drive.google.com/file/d/1pdzUejEFBYYA1xlc04FqJMVy7Z-zfwlp/view?usp=sharing",
    alt: "Catfish Chronicles logo"
  },
];

const Projects = () => {
  return (
    <div 
      className="px-10 bg-deep-blue md:px-28 py-8 ml:py-24 mb-10 flex flex-col items-center"
    >
      <div className="max-w-[1200px] w-full">
        <div className="border border-white text-white rounded-full mb-4 md:mb-6  flex px-4 py-2">
          <Image src={code_icon} height={35} width={35} alt="Code icon" className="size-8 mr-2 md:size-10"/>
          <h1 className="font-medium italic text-2xl md:text-4xl">MY PROJECTS</h1>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="swiper-container"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <ProjectTile 
                name={project.name} 
                cover={project.cover} 
                about={project.about} 
                skills={project.skills}
                link={project.link} 
                alt={project.alt} 
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
