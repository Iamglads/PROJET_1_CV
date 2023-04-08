import React, { useState } from "react";
import cv from "../../assets/images/cv.pdf";
import Form from "../Form/Form";

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
        <div className="btn-actions">
          <a href={cv} download className="btn btn-download">
            Télecharger CV
          </a>
          <a href={cv} target="_blank" className="btn">
            Ouvrir CV
          </a>
        </div>
      </div>

      <Form />
    </section>
  );
};

export default Contact;
