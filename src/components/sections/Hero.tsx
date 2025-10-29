import Image from "next/image";
import { FaReact, FaDocker, FaLinux, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiMariadb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { personalData } from "@/data/personal";
import { socialsData } from "@/data/socials";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center h-screen p-6  overflow-hidden space-y-5">
      {/* Animated icons in background */}
      <FaReact className="animated-icon speed-1 text-blue-500" style={{ top: '10%', left: '20%' }} />
      <RiNextjsFill className="animated-icon speed-2 text-orange-500" style={{ top: '50%', left: '10%' }} />
      <FaDocker className="animated-icon speed-3 text-pink-500" style={{ top: '30%', left: '90%' }} />
      <SiMariadb className="animated-icon speed-1 text-red-500" style={{ top: '80%', left: '30%' }} />
      <FaLinux className="animated-icon speed-2 text-green-500" style={{ top: '90%', left: '80%' }} />

      {/* Hero content */}
      <Image
        src={personalData.profilePicture}
        className="rounded-full border border-purple-700 shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-transform hover:scale-110 duration-300"
        width={160}
        height={160}
        alt="Profile picture"
      />

      <h1 className="text-3xl font-bold text-white">
        {personalData.name}
      </h1>

      <h3 className="text-xl text-gray-300">
        {personalData.title}
      </h3>

      <h5 className="text-sm text-gray-300 text-center">
        {personalData.description}
      </h5>

      {/* Social icons */}
      <div className="flex justify-between space-x-4">
        {socialsData.github !== "" && (
          <a href="https://github.com/heapreaper" target="_blank" rel="noopener noreferrer">
            <FaGithub
              size={26}
              className="transition-transform hover:scale-110 duration-200 hover:text-purple-500"
            />
          </a>
        )}

        {socialsData.linkedin !== "" && (
          <a href="" target={"_blank"} rel="noopener noreferrer">
            <FaLinkedin
              size={26}
              className="transition-transform hover:scale-110 duration-200 hover:text-purple-500"
            />
          </a>
        )}

        {socialsData.discord !== "" && (
          <a href="" target={"_blank"} rel="noopener noreferrer">
            <FaDiscord
              size={26}
              className="transition-transform hover:scale-110 duration-200 hover:text-purple-500"
            />
          </a>
        )}
      </div>
    </section>
  );
}
