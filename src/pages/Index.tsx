import PortfolioHero from "@/components/PortfolioHero";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsSection from "@/components/SkillsSection";
import AIReflections from "@/components/AIReflections";
import ContactSection from "@/components/ContactSection";
import VideoSection from "@/components/VideoSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <PortfolioHero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectShowcase />
      <VideoSection />
      <TestimonialsSection />
      <AIReflections />
      <ContactSection />
    </div>
  );
};

export default Index;
