import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const badge_icon = "/badge_icon.svg";

const timelineEvents = [
  {
    date: "February 2024 - Present",
    title: "Full Stack Developer",
    subtitle: "Code The Change YYC",
    content: `Contributed to the development of a hackathon management tool for the 2024 Hack the Change event`,
    skills: "Next.js, AWS, Tailwind CSS, Jira, Figma, and Agile methodology",
    icon: "/Experience/code.svg",
    alt: "Code icon"
  },
  {
    date: "December 2023 - February 2024",
    title: "Website Developer",
    subtitle: "Code The Change YYC",
    content: `Helped maintain and implement new components to the club's website, 
              enhancing its functionality and user experience`,
    skills: "React, Tailwind CSS, Jira, Figma, and Agile methodology",
    icon: "/Experience/code.svg",
    alt: "Code icon"
  },
  {
    date: "September 2022 - Present",
    title: "VP Communications & Executive Member",
    subtitle: "Women In Science and Engineering",
    content: `Created, hosted, and produced the WISE podcast, highlighting the experiences of women and diverse figures in STEM. 
              Designed promotional materials for events and managed the club's social media presence, driving engagement and growth.`,
    skills: "Canva, Graphic Design, Marketing",
    icon: "/Experience/design.svg",
    alt: "Design icon"
  },
  {
    date: "May 2024 - August 2024",
    title: "Summer Camp Instructor",
    subtitle: "Minds in Motion",
    content: `Designed and led 10 hands-on STEM activities per camp, engaging a total of 160 participants in all areas of STEM.
              Adapted lessons to diverse learning styles and abilities, fostering enthusiasm and understanding.
              Collaborated with instructors to create a dynamic and supportive learning environment`,
    skills: "Teaching, organization, collaboration, public speaking",
    icon: "/Experience/book.svg",
    alt: "Book icon"
  },
  {
    date: "June 2023 - August 2023",
    title: "In-Home Private Tutor",
    subtitle: "Tutor Doctor",
    content: `Tutored students in grades 1-12 across math, science, social studies, and ELA. 
              Developed and implemented 20 personalized lesson plans to meet individual learning needs`,
    skills: "Planning, organization, teaching, communication",
    icon: "/Experience/calc.svg",
    alt: "Calculator icon"
  },
]

const Experience = () => {
  return (
    <div className="px-10 md:px-28 md:py-10 flex justify-center mb-4">
      <div className="w-full max-w-[1200px]">
        <div className="flex items-center border border-black-ish rounded-full px-4 py-2 mb-10">
          <Image src={badge_icon} height={35} width={35} alt="Experience icon" className="size-8 mr-2" />
          <h1 className="font-bold italic text-2xl md:text-4xl">MY EXPERIENCE</h1>
        </div>
        <VerticalTimeline animate={true}>
          {timelineEvents.map((event, index) => (
            <VerticalTimelineElement 
              key={index} 
              visible={true}
              date={event.date} 
              icon={<Image src={event.icon} alt={event.alt} height={30} width={30} />}            
            >
              <h1 className="text-lg md:text-xl font-black">{event.title}</h1>
              <h2 className="font-semibold md:font-medium">{event.subtitle}</h2>
              <p>{event.content}</p>
              <p className="italic"><span className="font-black">Skills Used:</span> {event.skills}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience;
