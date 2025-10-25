import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-6 bg-gray-900 space-y-5">
      <Image
        src="https://placehold.co/120x120/png"
        className="rounded-full"
        width={120}
        height={120}
        alt="Profile picture"
      />

      <h1 className="text-3xl font-bold">
        Kelvin de Reus
      </h1>

      <h3 className="text-xl text-gray-300">
        Full Stack Developer
      </h3>

      <h5 className="text-sm  text-gray-300 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </h5>
    </div>
  );
}
