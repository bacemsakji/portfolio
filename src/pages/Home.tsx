import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Timeline from "../components/sections/Timeline";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* pt-14 offsets the fixed navbar (h-14) */}
      <main style={{ paddingTop: "3.5rem" }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
