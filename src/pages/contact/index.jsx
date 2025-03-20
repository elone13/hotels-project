import React from "react";
import "./contact.css";
import Form from "../../components/form/form";


const Contact = () => {
  return (
    <>
    <div className="contact-page">
      <h1 className="contact-title">Contact</h1>

      <div className="contact-container">
        {/* Section Adresse */}
        <div className="contact-card">
          <h2>Adresse</h2>
          <p>123 Main St</p>
          <p>Springfield, IL 62701</p>
          <p>United States</p>
        </div>

        {/* Section Téléphone */}
        <div className="contact-card">
          <h2>Phone</h2>
          <p>Fixe 1 : 555-555-5556</p>
          <p>Fixe 2 : 555-555-5556</p>
          <p>Mobile : 555-555-5556</p>
        </div>
      </div>
    </div>
    <Form />
    </>
  );
};

export default Contact;
