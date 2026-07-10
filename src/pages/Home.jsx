import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Experience from "../components/Experience";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ExtraSection from "../components/ExtraSection";
import AchievementFAQ from "../components/AchievementFAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Learning from "../components/Learning";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Hero />
      <TechStack />
      <About />
       <Stats />
      <Experience />
      <Skills />
      <Projects />
     <ExtraSection />
     <AchievementFAQ />
     <CTA />
     <Learning />
     <Footer />
    </>
  );
}

export default App;