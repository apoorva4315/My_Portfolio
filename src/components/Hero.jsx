import "./Hero.css";
import profileImage from "../assets/Apoorva.jpeg";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Apoorva_K.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-subtitle">Hello, I'm</p>

        <h1 className="hero-title">
          <span> Apoorva Kulkarni</span>
        </h1>

        <h2>Frontend Developer | React Developer</h2>

        <p className="hero-description">
          Frontend Developer with 3+ years of experience building responsive,
          scalable and user-friendly web applications using React.js,
          JavaScript, TypeScript and Tailwind CSS.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
                      href={resume}
                      download="Apoorva_Kulkarni_Resume.pdf"
                      className="secondary-btn"
                    >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-circle">
          <img src={profileImage} alt="Apoorva Kulkarni" />
        </div>

        <div className="experience-card">
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>

        <div className="count">
          <h3>20+</h3>
          <p>Projects</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;