import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import dhimg from "../images/dhimg.png";
import { Button } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <main className="home">
        <div className="home-info">
          <p>Hi, I'm</p>
          <h1>Daniel Heredia</h1>
          <p>A React Frontend Web Developer in Mexico City</p>
          <Button
            variant="outline-secondary"
            type="button"
            className="btn main-btn"
            href="mailto: danielheredia13@gmail.com"
          >
            Get in Touch
          </Button>
        </div>
        <img className="photo" src={dhimg} alt="profile-photo" />
      </main>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Main;
