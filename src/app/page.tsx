import Image from "next/image";
import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}
