import "./Sidebar.css";
import { useState, useEffect } from "react";

import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Sidebar = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleGithubClick = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2500);
  };

  useEffect(() => {
    const ids = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "certifications",
      "contact",
    ];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-80px 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>AK</h2>
        </div>

        <ul className="sidebar-menu">
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home">
              <FaHome />
            </a>
          </li>

          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">
              <FaUser />
            </a>
          </li>

          <li className={activeSection === "skills" ? "active" : ""}>
            <a href="#skills">
              <FaCode />
            </a>
          </li>

          <li className={activeSection === "experience" ? "active" : ""}>
            <a href="#experience">
              <FaBriefcase />
            </a>
          </li>

          <li className={activeSection === "projects" ? "active" : ""}>
            <a href="#projects">
              <FaProjectDiagram />
            </a>
          </li>

          <li className={activeSection === "certifications" ? "active" : ""}>
            <a href="#certifications">
              <FaCertificate />
            </a>
          </li>

          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact">
              <FaEnvelope />
            </a>
          </li>
        </ul>

        <div className="sidebar-social">
          <button
            className="sidebar-social-btn"
            onClick={handleGithubClick}
            title="GitHub"
          >
            <FaGithub />
          </button>

          <a
            href="https://www.linkedin.com/in/apoorva-kulkarni-44b943218/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {showMessage && (
        <div className="toast-message">
          GitHub repositories are currently being organized and will be
          available soon.
        </div>
      )}
    </>
  );
};

export default Sidebar;