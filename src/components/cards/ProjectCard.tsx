import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { ProjectCardProps } from "@/types/project";

export default function ProjectCard({
  title,
  description,
  githubUrl,
  websiteUrl,
  architecture,
  achievements,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="relative backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:gap-8 gap-4 items-center text-white border border-white/10">
      {/* Top-right icons */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-purple-500/20 transition-colors"
            title="View on GitHub"
          >
            <FaGithub className="w-5 h-5 text-purple-400" />
          </a>
        )}

        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-purple-500/20 transition-colors"
            title="Visit Website"
          >
            <FaGlobe className="w-5 h-5 text-purple-400" />
          </a>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">{title}</h2>

          {/* Description */}
          <p className="mb-6 text-gray-300">{description}</p>

          {/* Architecture & Achievements */}
          <div className="flex flex-wrap justify-center items-start gap-12 mb-6 text-center">
            <div>
              <h3 className="text-purple-500 font-semibold mb-2">Architecture</h3>
              <ul className="space-y-1 text-gray-200 list-disc list-inside text-left">
                {architecture.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-purple-500 font-semibold mb-2">Achievements</h3>
              <ul className="space-y-1 text-gray-200 list-disc list-inside text-left">
                {achievements.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 rounded-lg p-6 flex flex-col justify-center items-center shadow-inner min-w-[340px]">
        <Image
          src={imageUrl}
          alt={`${title} Screenshot`}
          width={320}
          height={320}
          className="rounded-md shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-transform hover:scale-110 duration-300"
        />
      </div>
    </div>
  );
}
