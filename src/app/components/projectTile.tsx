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
    <div className="bg-off-white ms:py-16 shadow-md mb-2 p-12 w-full rounded-2xl flex flex-col ms:flex-row items-center">
      <div className="ms:mr-10">
        <Image src={cover} height={200} width={200} alt={alt} className="rounded-xl ms:size-full max-size-[250px] shadow-lg"/>
      </div>
      <div className="mt-6 ms:mt-0 w-full ms:pr-4">
        <h1 className="font-black text-2xl ms:text-3xl">{name}</h1>
        <p className="mt-4 text-left">{about}</p>
        <p className="mt-2 italic"><span className="font-bold">Skills Used:</span> {skills}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full flex">
          <button className="mt-10 border border-black-ish font-black hover:scale-105 transition-transform duration-500 ms:text-xl rounded-full px-4 py-1 flex items-center">
            Check it out
            <Image src={arrow_right} height={25} width={25} alt="Arrow icon" className="ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;