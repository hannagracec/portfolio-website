import Image from "next/image";

interface ProjectTileProps {
  name: string;
  cover: string;
  about: string;
  skills: string;
  link: string;
  alt: string;
}

const arrow_right = "/arrow_right.svg";

const ProjectTile = ({ name, cover, about, skills, link, alt }: ProjectTileProps) => {
  return (
    <div className="bg-off-white md:py-16 shadow-md mb-2 p-12 w-full rounded-2xl flex flex-col md:flex-row items-center">
      <div className="size-full flex items-center justify-center md:mr-0">
        <Image src={cover} height={200} width={200} alt={alt} className="rounded-xl size-[200px] shadow-lg md:size-[300px]"/>
      </div>
      <div className="mt-6 md:mt-0 w-full md:pr-4">
        <h1 className="font-bold text-2xl md:text-4xl">{name}</h1>
        <p className="mt-4 text-left md:text-lg">{about}</p>
        <p className="mt-4 md:text-lg"><span className="font-bold ">Skills Used:</span> {skills}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full flex">
          <button className="mt-10 border border-black-ish font-black hover:scale-105 transition-transform duration-500 md:text-xl rounded-full px-4 py-1 flex items-center">
            Check it out
            <Image src={arrow_right} height={25} width={25} alt="Arrow icon" className="ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;