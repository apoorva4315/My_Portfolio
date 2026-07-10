import "./Experience.css";

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Kyndryl India",
    duration: "Aug 2024 – Present",

    description:
      "Building responsive and scalable web applications using React.js, TypeScript, JavaScript, and Tailwind CSS. Developing reusable UI components, integrating REST APIs, managing state with Redux & Context API, and improving application performance by 25%.",

    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "REST APIs",
      "JavaScript",
      "HTML/CSS"
    ],
  },

  {
    role: "UI/UX Designer",
    company: "Kyndryl India",
    duration: "Apr 2023 – Jun 2024",

    description:
      "Designed modern and user-friendly interfaces using Figma. Created wireframes, user flows, and high-fidelity prototypes while collaborating with developers to deliver pixel-perfect implementations and reduce UI rework by 30%.",

    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "UI Design",
      "UX Research",
    ],
  },

  {
    role: "Data Visualization Engineer",
    company: "Kyndryl India",
    duration: "Aug 2022 – Feb 2023",

    description:
      "Developed interactive dashboards using Kibana and Elasticsearch to visualize operational metrics, monitor system performance, and deliver actionable business insights through data visualization.",

    skills: [
      "Kibana",
      "Elasticsearch",
      "Dashboards",
      "Analytics",
      "Visualization",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">

      <h2>
        Experience <span></span>
      </h2>

      <div className="timeline">

        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <span>{item.duration}</span>

              <p>{item.description}</p>

              <div className="skill-tags">
                {item.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;