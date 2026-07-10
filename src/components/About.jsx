import "./About.css";
import { FaCode, FaPalette, FaRocket, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Develop responsive, scalable, and high-performance web applications using React.js, JavaScript, TypeScript, and Tailwind CSS with reusable components and modern UI practices.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Implementation",
    desc: "Convert Figma designs into pixel-perfect, responsive interfaces while ensuring accessibility, consistency, and an intuitive user experience across devices.",
  },
  {
    icon: <FaRocket />,
    title: "Data Visulization Engineer",
    desc: "Build interactive dashboards using Kibana and Elasticsearch to visualize business metrics, monitor performance, and deliver actionable insights.",
  },
  {
    icon: <FaServer />,
    title: "API Integration",
    desc: "Integrate REST APIs, authentication, and dynamic data handling to build fast, reliable, and seamless web applications.",
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-card">
        <h2>
          About Me
          <span></span>
        </h2>

        <p>
          I'm a Frontend Developer with 3+ years of experience building
          responsive, scalable, and user-centric web applications using
          React.js, JavaScript, TypeScript, and Tailwind CSS.
        </p>

        <p>
          I enjoy transforming UI/UX designs into modern, high-performance
          applications with reusable components, clean architecture, and
          seamless API integrations.
        </p>

        <div className="about-highlights">
          <div>✔ 3+ Years of Industry Experience</div>
          <div>✔ 20+ Projects Delivered</div>
          <div>✔ React.js • JavaScript • TypeScript</div>
          <div>✔ UI/UX Implementation & Responsive Design</div>
          <div>✔ REST API Integration & Performance Optimization</div>
        </div>

        {/* <button>Know More About Me</button> */}
      </div>
      <div className="services">
        <h2>
          What I Do
          <span></span>
        </h2>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
