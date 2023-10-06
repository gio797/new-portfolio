import { useState } from "react";
import "./contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div className="contact" id="contact">
      <h1>Let's work together.</h1>
      {showContacts ? null : (
        <button onClick={() => setShowContacts(true)}>Get in touch.</button>
      )}
      {showContacts ? (
        <div className="contact-info">
          <div className="social">
            <h3>
              Social Links:{" "}
              <a
                href="https://www.linkedin.com/in/giorgi-muchaidze-2115b6279/"
                target="blank"
              >
                <BsLinkedin size={30} color="#0366c3" />
              </a>{" "}
              <a href="https://github.com/gio797" target="blank">
                <AiFillGithub size={30} color="#0d2636" />
              </a>
            </h3>
          </div>
          <p>
            <strong>Email:</strong> g.muchaidze@yahoo.com
          </p>
          <p>
            <strong>Mobile:</strong> +995 595228259
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Contact;
