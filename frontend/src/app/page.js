import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Herosection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4">
        <Navbar />
      <div className="container mt-24 mx-auto px-4">
        <Herosection />
        <AchievementsSection />
        <AboutSection />
        <Skills />
        <Experience />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
