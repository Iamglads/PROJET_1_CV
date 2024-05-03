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
      <Form />
    </section>
  );
};

export default Contact;
