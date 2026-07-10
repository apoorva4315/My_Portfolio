import "./AchievementFAQ.css";

const AchievementFAQ = () => {
  return (
    <section className="achievement-faq-section">

      <div className="achievement-card">

        <h2>
          Achievements <span>•</span>
        </h2>

        <div className="achievement-item">
          <h4> Improved Application Performance by 25%</h4>
          <p>
            Optimized React applications using lazy loading, reusable
            components and efficient rendering techniques to deliver a
            faster and smoother user experience.
          </p>
        </div>

        <div className="achievement-item">
          <h4> Reduced UI Rework by 30%</h4>
          <p>
            Designed user-friendly wireframes and high-fidelity Figma
            prototypes, improving collaboration between design and
            development teams.
          </p>
        </div>

        <div className="achievement-item">
          <h4>Built Real-time Analytics Dashboards</h4>
          <p>
            Developed interactive Kibana dashboards with Elasticsearch,
            enabling faster operational monitoring and data-driven
            decision-making.
          </p>
        </div>

        <div className="achievement-item">
          <h4>Strong Team Collaboration</h4>
          <p>
            Recognized for being a dependable team member who adapts
            quickly to new technologies, supports colleagues, and
            consistently delivers work on time.
          </p>
        </div>

      </div>

      <div className="faq-card">

        <h2>
          Frequently Asked Questions <span>•</span>
        </h2>

        <div className="faq-item">
          <h4>Do you work remotely?</h4>
          <p>
            Yes. I'm open to remote, hybrid, and onsite opportunities.
          </p>
        </div>

        <div className="faq-item">
          <h4>What technologies do you specialize in?</h4>
          <p>
            React.js, JavaScript, TypeScript, Tailwind CSS, Redux,
            HTML5, CSS3, and modern frontend development.
          </p>
        </div>

        <div className="faq-item">
          <h4>Do you have UI/UX design experience?</h4>
          <p>
            Yes. I have professional experience designing wireframes,
            prototypes, responsive layouts, and user flows using Figma.
          </p>
        </div>

        <div className="faq-item">
          <h4>Are you available for new opportunities?</h4>
          <p>
            Yes. I'm actively looking for exciting Frontend and React
            Developer roles where I can contribute and continue growing.
          </p>
        </div>

      </div>

    </section>
  );
};

export default AchievementFAQ;