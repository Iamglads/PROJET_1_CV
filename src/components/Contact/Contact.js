import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__heading">CONTACT</h2>
      <div className="contact__divider divider-heading"></div>
      <div className="contact__content">
        <ul className="contact__content--icons">
          <li>
            <a
              href="https://www.linkedin.com/in/gladston-aristoverne/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Iamglads"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithubInverted className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
