import { useState } from "react";
import "./ExtraSection.css";

import {
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const testimonials = [
  {
    feedback:
      "Apoorva consistently delivers high-quality work with great attention to detail. She takes ownership of her tasks, maintains clean coding standards, and always meets project deadlines.",
    author: "— Team Feedback",
  },
  {
    feedback:
      "A collaborative and supportive teammate who is always willing to help others. She communicates effectively, shares knowledge with the team, and contributes positively to every project.",
    author: "— Colleague Feedback",
  },
  {
    feedback:
      "Apoorva adapts quickly to new technologies and embraces new challenges with confidence. She learns fast, maintains a positive attitude, and consistently delivers reliable solutions.",
    author: "— Project Team",
  },
];

const ExtraSection = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <section className="extra-section">
        <div className="extra-card">
          <h2>
            Education <span>•</span>
          </h2>

          <div className="education">
            <FaGraduationCap className="card-icon" />

            <h3>Bachelor of Engineering</h3>

            <p>Information Science & Engineering</p>

            <p>Basaveshwar Engineering College</p>

            <span>2018 – 2022</span>

            <div className="cgpa">
              CGPA <strong>7.92 / 10</strong>
            </div>
          </div>
        </div>

        <div className="extra-card" id="certifications">
          <h2>
            Certifications <span>•</span>
          </h2>

          <div className="certificate-item">
            <FaCertificate className="card-icon" />

            <div>
              <h4>Microsoft Azure AI Fundamentals</h4>
              <p>Microsoft</p>
            </div>
          </div>

          <div className="certificate-item">
            <FaCertificate className="card-icon" />

            <div>
              <h4>AWS Academy Data Engineering and Machine Learning</h4>
              <p>Amazon Web Services</p>
            </div>
          </div>

          <div className="certificate-item">
            <FaCertificate className="card-icon" />

            <div>
              <h4>
                Certified AI Engineer – Building and Leading AI/ML Projects and
                Products
              </h4>
              <p>REVA University</p>
            </div>
          </div>
        </div>
        <div className="extra-card people-say">
          <h2>
            What People Say <span>•</span>
          </h2>

          <div className="testimonial-slider">
            <p>{testimonials[current].feedback}</p>

            <h4>{testimonials[current].author}</h4>

            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={current === index ? "active" : ""}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="extra-card" id="contact">
          <h2>
            Get In Touch <span>•</span>
          </h2>

          <p className="contact-text">
            I'm always open to discussing new opportunities, collaborations, and
            exciting projects.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>apoorva4994@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 79755 97625</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Bengaluru, Karnataka</span>
          </div>

          <div className="social-icons">
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
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=apoorva4994@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraSection;
