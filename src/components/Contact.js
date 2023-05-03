import React from "react";

const Contact = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="contact" id="contact">
      <h3>Contact:</h3>

      <h5>danielheredia13@gmail.com</h5>
      <p className="footer"> &copy; Copyright Daniel Heredia {year}</p>
    </div>
  );
};

export default Contact;
