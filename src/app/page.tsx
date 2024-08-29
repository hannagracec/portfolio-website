"use client";
import React, { useRef } from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Home() {
  const aboutMeSection = useRef<HTMLDivElement>(null);
  const projectsSection = useRef<HTMLDivElement>(null);
  const experienceSection = useRef<HTMLDivElement>(null);
  const contactMeSection = useRef<HTMLDivElement>(null);

  const scrollToAboutMe = () => {
    aboutMeSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    projectsSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    experienceSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContactMe = () => {
    contactMeSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-off-white text-black-ish flex flex-col items-center">
      <Header 
        aboutMeScroll={scrollToAboutMe}
        projectsScroll={scrollToProjects}
        experienceScroll={scrollToExperience}
        contactMeScroll={scrollToContactMe}
      />
      <Landing />
      <div ref={aboutMeSection} className="w-full max-w-[1200px] ml:flex ml:flex-grow ml:py-20 justify-center">
        <AboutMe />
        <Skills />
      </div>
      <div ref={projectsSection} className="w-full">
        <Projects />
      </div>
      <div ref={experienceSection} className="w-full">
        <Experience />
      </div>
      <div ref={contactMeSection} className="w-full">
        <Contact />
      </div>
    </div>
  );
}
