import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mx-auto py-4 px-12">
        
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />

      </div>

    </main>
    
  );
}