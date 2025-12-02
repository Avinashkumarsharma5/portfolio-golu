import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
     
    </>
  );
};

export default App;
