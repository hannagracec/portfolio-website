import Image from "next/image";
import { useEffect, useState } from "react";

const star_icon = "/fancy_star.svg";

const skills = [
  { icon: "/Skills/figma.svg", name: "Figma" },
  { icon: "/Skills/nextjs.svg", name: "Next.js" },
  { icon: "/Skills/React.svg", name: "React" },
  { icon: "/Skills/jira.svg", name: "Jira" },
  { icon: "/Skills/tailwindcss.svg", name: "Tailwind CSS" },
  { icon: "/Skills/AWS.svg", name: "AWS" },
  { icon: "/Skills/firebase.svg", name: "Firebase" },
  { icon: "/Skills/c++.svg", name: "C++" },
  { icon: "/Skills/CSS.svg", name: "CSS" },
  { icon: "/Skills/Git.svg", name: "Git" },
  { icon: "/Skills/HTML.svg", name: "HTML" },
  { icon: "/Skills/JS.svg", name: "JavaScript" },
  { icon: "/Skills/python.svg", name: "Python" },
  { icon: "/Skills/vscode.svg", name: "VSCode" },
];

const ITEMS_PER_PAGE_SM = 4;  // Number of items per page on small screens
const ITEMS_PER_PAGE_LG = 6;  // Number of items per page on large screens

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animationClass, setAnimationClass] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_LG);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {  
        setItemsPerPage(ITEMS_PER_PAGE_SM);
      } else {
        setItemsPerPage(ITEMS_PER_PAGE_LG);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);  

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  useEffect(() => {
    setAnimationClass("opacity-100");
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setAnimationClass("opacity-0");
    setTimeout(() => {
      setCurrentPage(page);
      setAnimationClass("opacity-100");
    }, 300);
  };

  const paginatedSkills = skills.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="px-8 pb-8 ms:p-0 ms:ml-6 ms:w-[65%] h-full">
      <div className="w-full p-6 border border-black-ish rounded-3xl">
        <div className="flex justify-between items-center px-4 rounded-full border border-black-ish p-2 mb-6">
            <Image src={star_icon} height={40} width={35} alt="Star icon" className="ms:size-10 size-6" />
            <p className="text-xl ms:text-2xl text-center font-semibold">SKILLS AND TOOLS</p>
            <Image src={star_icon} height={40} width={35} alt="Star icon" className="ms:size-10 size-6" />
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 transition-opacity duration-300 ${animationClass}`}>
          {paginatedSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105 bg-white rounded-md shadow-lg py-12">
              <Image src={skill.icon} alt={skill.name} height={50} width={50} className="mb-2" />
              <p className="text-center text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <ul className="flex gap-2 items-center">
            <li>
              <button
                className="size-4 flex items-center justify-center font-bold"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                &lt;
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
              <li key={page} aria-label={`page ${page}`}>
                <button
                  className={`size-4 flex items-center justify-center rounded-full ${
                    currentPage === page
                      ? "bg-black-ish"
                      : "border border-black-ish hover:bg-black-ish transition-colors"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                </button>
              </li>
            ))}
            <li>
              <button
                className="size-4 flex items-center justify-center font-bold"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                &gt;
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
