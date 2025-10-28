import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-y-4 max-w-3xl flex flex-col items-center text-center">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>

  );
}
