import "./Skills.css";

import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    icon: <FaReact />,
  },
  {
    title: "UI / UX Design",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Responsive Design",
    ],
    icon: <FaFigma />,
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Python",
      "SQL",
      "REST API Integration",
      "AWS",
      "Microsoft Azure",
    ],
    icon: <FaAws />,
  },
  {
    title: "Tools & Performance",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Webpack",
      "Lazy Loading",
      "Code Splitting",
      "React DevTools",
      "Kibana",
      "Elasticsearch",
    ],
    icon: <FaGitAlt />,
  },
];
const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <h2>
        Technical Skills
        <span></span>
      </h2>

      <p className="skills-subtitle">
        Technologies and tools I use to design, build, optimize and deploy
        modern web applications.
      </p>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;