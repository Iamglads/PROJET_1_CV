import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [to_name, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nugqpnf",
        "template_pu9l7vd", // template id
        {
          to_name: to_name,
          message: message,
        },
        "fEqik-AE82WKQbh0B" // user id
      )
      .then(
        (response) => {
          console.log(
            "Email envoyé avec succès !",
            response.status,
            response.text
          );
          setConfirmationMessage("Votre message a été envoyé avec succès !");
        },
        (error) => {
          console.log("Erreur lors de l'envoi de l'email:", error);
          setConfirmationMessage(
            "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer!"
          );
        }
      );

    setFullName("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nom complet :</label>
          <input
            type="text"
            id="to_name"
            value={to_name}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Nom complet"
          />
        </div>

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Message"
        ></textarea>
        <div>{confirmationMessage && <p>{confirmationMessage}</p>}</div>

        <button className="btn" type="submit">
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default Form;
