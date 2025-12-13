import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import AppreciationsSection from "@/components/AppreciationsSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeSidebar from "@/components/ThemeSidebar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LanguagesSection />
      <ServicesSection />
      <ProjectsSection />
      <AwardsSection />
      <AppreciationsSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
      <ThemeSidebar />
    </main>
  );
};

export default Index;