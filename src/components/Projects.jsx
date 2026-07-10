import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import jobPortal from "../assets/job.png";
import dashboard from "../assets/invoice.png";
import kibana from "../assets/kibana.png";
import uiux from "../assets/figma.png";

const projects = [
  {
    title: "Job Portal Application",
    image: jobPortal,
    description:
      "A modern job portal built with React.js and TypeScript featuring dynamic job listings, search, filters, reusable UI components, and responsive design.",

    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Redux",
    ],
    link: "/projects/job-portal",
  },

  {
    title: "Invoice Payment Analytics Dashboard",
    image: dashboard,
    description:
      "Machine Learning dashboard for invoice payment analysis with KPI cards, CSV upload, customer segmentation, and predictive analytics.",

    technologies: ["React", "Python", "Gradio", "Machine Learning", "Pandas"],
    link: "/projects/invoice-dashboard",
  },

  {
    title: "Kibana Analytics Dashboard",
    image: kibana,
    description:
      "Real-time dashboard built using Kibana and Elasticsearch to visualize business metrics, operational insights, and interactive charts.",

    technologies: ["Kibana", "Elasticsearch", "Dashboards", "Analytics"],

    link: "/projects/kibana-dashboard",
  },

  {
    title: "UI/UX Design System & Enterprise Use Cases",
    image: uiux,
    description:
      "Designed 30+ enterprise use cases including dashboards, workflows, forms, and responsive interfaces using Figma, focusing on usability, consistency, and seamless developer handoff.",

    technologies: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Design System",
    ],

    link: "/projects/uiux-case-study",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>
          Featured Projects <span className="heading-dot">•</span>
        </h2>
        <span className="section-description">
          A collection of projects demonstrating my expertise in frontend
          development, UI/UX, dashboards, and AI/ML solutions.
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <Link to={project.link} className="view-btn">
                  View Details
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
