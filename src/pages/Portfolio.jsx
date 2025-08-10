import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";




export default function Portfolio() {
  return (
    <div className="portfolio">
        <Navigation />
        <Hero />
        <About/>
        <Skills />
        <Projects />
        <Contact/>
        <Footer />
      </div>
    
  );
}