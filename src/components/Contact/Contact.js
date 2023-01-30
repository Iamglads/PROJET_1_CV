import React, { useState } from "react";
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
    <section id="contact" className="section contact">
      <div className="section-title">
        <h2>Contact</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center">
        {/*   <a
          href="mailto:gladston.aristoverne@gmail.com"
          className="mail-address"
        >
          gladston.aristoverne@gmail.com
        </a> */}
        <div className="btn-actions">
          <a href={cv} download className="btn btn-download">
            Télecharger CV
          </a>
          <a href={cv} target="_blank" className="btn">
            Ouvrir CV
          </a>
        </div>
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
    </section>
  );
};

export default Contact;
