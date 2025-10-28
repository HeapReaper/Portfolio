import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  frontend: string[];
  backend: string[];
  achievements: string[];
  imageUrl: string;
}

export default function ProjectCard({
  title,
  description,
  frontend,
  backend,
  achievements,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:gap-8 gap-4 items-center text-white ms-4 me-4 border border-white/10 max-w-3xl">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="mb-6 text-gray-300">{description}</p>

          <div className="flex flex-wrap gap-8 mb-6">
            <div>
              <h3 className="text-purple-500 font-semibold mb-2">Frontend Architecture</h3>
              <ul className="space-y-1 text-gray-200 list-disc list-inside">
                {frontend.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-purple-500 font-semibold mb-2">Backend Systems</h3>
              <ul className="space-y-1 text-gray-200 list-disc list-inside">
                {backend.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-purple-500 font-semibold mb-2">Key Achievements</h3>
            <ul className="space-y-1 text-gray-200 list-disc list-inside">
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 rounded-lg p-6 flex flex-col justify-center items-center shadow-inner min-w-[340px]">
        <Image
          src={imageUrl}
          alt={`${title} Screenshot`}
          width={320}
          height={320}
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );
}
