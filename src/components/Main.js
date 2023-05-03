import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  return (
    <main className="home">
      <p>Hi, I'm</p>
      <h1>Daniel Heredia</h1>
      <p>A Front-End focused, Full-Stack Web Developer</p>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
