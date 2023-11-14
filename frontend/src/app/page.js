import AboutSection from "./components/AboutSection";
import Herosection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto px-4">
        <Herosection />
        <AboutSection />
      </div>
    </main>
  );
}
