import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import cv from "../../assets/images/cv.pdf";

const Contact = () => {
  const [name, setName] = useState("Glad");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
		e.preventDefault();
		let contactForm = {
      name,
      email,
      message,
    };
    console.log(contactForm);
  };

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
        <p>gladston.aristoverne@gmail.com</p>
        <div className="cv">
          <a href={cv} download class="download">
            Télecharger CV
          </a>
          <a href={cv} target="_blank" class="open">
            Ouvrir CV
          </a>
        </div>
        {/*         <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="test"
              name="name"
              id="name"
              placeholder="Nom complet"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Votre message"
              rows="5"
            />
          </div>
          <button type="submit">Envoyer</button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
