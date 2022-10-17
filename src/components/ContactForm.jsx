import React from "react";
import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="name" type="text" />
        <input placeholder="e-mail" type="text" />
        <input placeholder="Subject" type="text" />
        <textarea
          placeholder="message"
          name="msg"
          id="place"
          cols="30"
          rows="4"
        ></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
