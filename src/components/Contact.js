import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti"



function Contact() {
  return (
    <div>
      <div className="heading">  <h1>Lets Connect!</h1></div>
      <div className="contact">
        <div className="social-icons">
          <a href="https://github.com/malloha"><FaGithub className="icon" /><h6>GitHub</h6></a>
          <a href="https://www.linkedin.com/in/maleeha-hasan/"><FaLinkedin className="icon" /><h6>LinkedIn</h6></a>
          <a href="https://drive.google.com/file/d/1SVIkSlVOyveFTacQX1yhGvSiLTmP4v5V/view?usp=sharing"><TiDocumentText className="icon" /><h6>Resume</h6></a>
        </div>
      </div>
    </div >
  );
}

export default Contact;
