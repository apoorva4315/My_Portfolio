import "./CTA.css";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import resume from "../assets/Apoorva_K.pdf";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <h2>
          Let's Build Something Amazing Together
          <span> • </span>
        </h2>

        <p>
          I'm always interested in building innovative products, solving
          challenging problems, and collaborating with teams that create
          impactful digital experiences.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="cta-primary">
            <FaEnvelope />
            Contact Me
          </a>

          <a
            href={resume}
            download="Apoorva_Kulkarni_Resume.pdf"
            className="secondary-btn"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
