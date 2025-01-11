import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" required />
        <input type="email" placeholder="Email" className="contact-input" required />
        <textarea placeholder="Message..." className="contact-textarea" required></textarea>
        <button type="submit" className="contact-button">Send it</button>
      </form>
    </div>
  );
};

export default Contact;
