import "./Learning.css";

const learning = [
  "Next.js",
  "Node.js",
  "AI Engineering",
  "Machine Learning",
  "System Design",
  "Docker",
  "CI/CD",
  "Data Structures & Algorithms",
];

const Learning = () => {
  return (
    <section className="learning-section" id="learning">
      <div className="learning-heading">
        <p>CONTINUOUS LEARNING</p>

        <h2>
          Currently Exploring <span>•</span>
        </h2>

        <p className="learning-subtitle">
          Passionate about continuous learning and expanding my expertise in
          modern web development, AI, and scalable software engineering.
        </p>
      </div>

      <div className="learning-container">
        {learning.map((item, index) => (
          <div className="learning-tag" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Learning;