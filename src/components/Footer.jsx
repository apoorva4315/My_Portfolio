import "./Footer.css";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleGithubClick = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-brand">
          <h2>Apoorva Kulkarni</h2>

          <p>
            Frontend Developer specializing in React.js, UI/UX design and
            scalable web applications.
          </p>
        </div>



        <div className="footer-connect">
          <h3>Connect</h3>

          <div className="footer-social">


            <button
              className="social-btn"
              onClick={handleGithubClick}
              title="GitHub"
            >
              <FaGithub />
            </button>

 

            <a
              href="https://www.linkedin.com/in/apoorva-kulkarni-44b943218"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>


            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=apoorva4994@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {showMessage && (
        <div className="toast-message">
          GitHub repositories are currently being organized and will be
          available soon.
        </div>
      )}

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Apoorva Kulkarni. All Rights Reserved.
        </p>

        <a href="#home">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;