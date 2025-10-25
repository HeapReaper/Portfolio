import Image from "next/image";
import { FaReact, FaDocker, FaLinux } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMariadb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen p-6 bg-gray-900 overflow-hidden space-y-5">
      {/* Animated icons in background */}
      <FaReact className="animated-icon speed-1 text-blue-500" style={{ top: '10%', left: '20%' }} />
      <RiNextjsFill className="animated-icon speed-2 text-orange-500" style={{ top: '50%', left: '10%' }} />
      <FaDocker className="animated-icon speed-3 text-pink-500" style={{ top: '30%', left: '90%' }} />
      <SiMariadb className="animated-icon speed-1 text-red-500" style={{ top: '80%', left: '30%' }} />
      <FaLinux className="animated-icon speed-3 text-green-500" style={{ top: '90%', left: '80%' }} />

      {/* Hero content */}
      <Image
        src="https://placehold.co/140x140/png"
        className="rounded-full border border-purple-700 shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-transform hover:scale-110 duration-300"
        width={140}
        height={140}
        alt="Profile picture"
      />

      <h1 className="text-3xl font-bold text-white">
        Kelvin de Reus
      </h1>

      <h3 className="text-xl text-gray-300">
        🧑‍💻 Full Stack Web Developer 🧑‍💻
      </h3>

      <h5 className="text-sm text-gray-300 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </h5>
    </div>
  );
}
