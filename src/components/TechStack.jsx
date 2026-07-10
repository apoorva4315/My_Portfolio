import "./TechStack.css";

import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const techStack = [
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
];

const TechStack = () => {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <h4>TECH STACK</h4>

      <div className="tech-row">
        {techStack.map((tech) => (
          <div className="tech-item" key={tech.name}>
            <div className="icon">{tech.icon}</div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;