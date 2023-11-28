"use client"
import { ThemeProvider } from "next-themes";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Herosection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import ProjectSection from "./components/ProjectSection";
import Projects from "./components/projectSection/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="flex min-h-screen flex-col bg-light dark:bg-dark mx-auto px-12 py-4">
        <Navbar1 />
        {/* <Navbar /> */}
        <div className="container mt-24 mx-auto px-4">
          <Herosection />
          {/* <AchievementsSection /> */}
          <AboutSection />
          <Skills />
          <Experience />
          {/* <ProjectSection /> */}
          <Projects />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
