"use client";
import React, { useRef } from "react";
import Header from "./components/header";
import Landing from "./components/landing";

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
    <div className="bg-off-white text-black-ish">
      <Header 
        aboutMeScroll={scrollToAboutMe}
        projectsScroll={scrollToProjects}
        experienceScroll={scrollToExperience}
        contactMeScroll={scrollToContactMe}
      />
      <Landing />
      <div ref={aboutMeSection} className="h-screen">
      </div>
      <div ref={projectsSection} className="h-screen">
      </div>
      <div ref={experienceSection} className="h-screen">
      </div>
      <div ref={contactMeSection} className="h-screen">
      </div>
    </div>
  );
}
