import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go"

function Footer() {
  return (
    <div className="footer">
      <FaGithub className="icon" />
      <FaLinkedin className="icon" />
      <GoMail className="icon" />

    </div>
  );
}

export default Footer;
