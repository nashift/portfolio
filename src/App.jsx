import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react"

// import './App.css'

export default function App() {
  return (
    <>
      <Cursor />
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      <Analytics/>
      
    </>
  );
}
