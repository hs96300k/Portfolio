import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-header">CONTACT US</h1>
      <section className="contact-main">
        <div className="social-icons">
          <a
            href="www.linkedin.com/in/hashirsajid"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01bf7863cd7964a1c8"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fas fa-briefcase"></i>
          </a>
          <a
            href="https://github.com/hs96300k"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://wa.me/923704353050"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
