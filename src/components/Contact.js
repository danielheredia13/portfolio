import React from "react";
import { Button } from "react-bootstrap";

const Contact = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="contact" id="contact">
      <h3>Contact:</h3>
      <p>
        Whether you have a question or just want to say hi, send me an email
      </p>
      <Button
        variant="outline-secondary"
        type="button"
        className="btn contact-btn"
        href="mailto: danielheredia13@gmail.com"
      >
        Say Hello
      </Button>
      <h5>danielheredia13@gmail.com</h5>
      <p className="footer"> &copy; Copyright Daniel Heredia {year}</p>
    </div>
  );
};

export default Contact;
