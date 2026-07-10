import "./Stats.css";

const stats = [
  {
    number: "20+",
    title: "Projects",
    subtitle: "Completed",
  },
  {
    number: "3+",
    title: "Years",
    subtitle: "Experience",
  },
  {
    number: "25%",
    title: "Performance",
    subtitle: "Improvement",
  },
  {
    number: "10+",
    title: "Technologies",
    subtitle: "Worked On",
  },
  {
    number: "100%",
    title: "Responsive",
    subtitle: "Design",
  },
];

const Stats = () => {
  return (
    <section className="stats">

      {stats.map((item, index) => (
        <div className="stat-card" key={index}>

          <h2>{item.number}</h2>

          <h3>{item.title}</h3>

          <p>{item.subtitle}</p>

        </div>
      ))}

    </section>
  );
};

export default Stats;