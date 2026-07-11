import "./Sidebar.css";

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
  return (
    <div className="sidebar">
    
      <div className="sidebar-logo">
        <h2>AK</h2>
      </div>

  
      <ul className="sidebar-menu">
        <li>
          <a href="#home" title="Home">
            <FaHome />
          </a>
        </li>

        <li>
          <a href="#about" title="About">
            <FaUser />
          </a>
        </li>

        <li>
          <a href="#skills" title="Skills">
            <FaCode />
          </a>
        </li>

        <li>
          <a href="#experience" title="Experience">
            <FaBriefcase />
          </a>
        </li>

        <li>
          <a href="#projects" title="Projects">
            <FaProjectDiagram />
          </a>
        </li>

        <li>
          <a href="#certifications" title="Certifications">
            <FaCertificate />
          </a>
        </li>

        <li>
          <a href="#contact" title="Contact">
            <FaEnvelope />
          </a>
        </li>
      </ul>

    
      <div className="sidebar-social">
        <a
          href="https://github.com/apoorva4315"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/apoorva-kulkarni-44b943218/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;