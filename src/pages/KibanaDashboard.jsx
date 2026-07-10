import "./ProjectDetails.css";
import { Link } from "react-router-dom";

import kibana from "../assets/kibana.png";

const KibanaDashboard = () => {
  return (
    <section className="project-details">
      <div className="project-container">

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>

        <img
          src={kibana}
          alt="Kibana Analytics Dashboard"
          className="project-banner"
        />

        <h1>Kibana Analytics Dashboard</h1>

        <p className="overview">
          Designed and developed interactive Kibana dashboards to visualize
          large-scale operational and business data in real time. The solution
          enabled stakeholders to monitor system health, identify trends,
          analyze performance metrics, and make faster data-driven decisions
          using Elasticsearch and Kibana.
        </p>


        <div className="project-section">
          <h2>Project Overview</h2>

          <p>
            This dashboard was developed to transform raw operational data into
            meaningful visual insights. Using Elasticsearch as the data source
            and Kibana for visualization, the project provided real-time
            monitoring of key business metrics, improved data accessibility, and
            helped teams quickly identify issues through interactive dashboards.
          </p>
        </div>


        <div className="project-section">
          <h2>Key Features</h2>

          <ul>
            <li>Real-time Data Visualization</li>
            <li>Interactive Dashboards</li>
            <li>Advanced Filtering & Search</li>
            <li>Custom Charts & Graphs</li>
            <li>Business KPI Monitoring</li>
            <li>Operational Metrics Dashboard</li>
            <li>Performance Monitoring</li>
            <li>Time-based Trend Analysis</li>
            <li>Interactive Drill-down Reports</li>
            <li>Responsive Dashboard Layout</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Dashboard Components</h2>

          <ul>
            <li>Line Charts</li>
            <li>Bar Charts</li>
            <li>Pie Charts</li>
            <li>Data Tables</li>
            <li>Metric Cards</li>
            <li>Heat Maps</li>
            <li>Search Filters</li>
            <li>Date Range Filters</li>
          </ul>
        </div>
        <div className="project-section">
          <h2>Technology Stack</h2>

          <div className="tech-list">
            <span>Kibana</span>
            <span>Elasticsearch</span>
            <span>JSON</span>
            <span>REST APIs</span>
            <span>Data Visualization</span>
            <span>Analytics</span>
            <span>Dashboards</span>
          </div>
        </div>

        <div className="project-section">
          <h2>My Responsibilities</h2>

          <ul>
            <li>Designed interactive Kibana dashboards.</li>
            <li>Created visualizations for operational metrics.</li>
            <li>Configured filters and search capabilities.</li>
            <li>Optimized dashboard performance.</li>
            <li>Collaborated with stakeholders to identify reporting needs.</li>
            <li>Maintained dashboards for continuous monitoring.</li>
            <li>Improved accessibility of business insights.</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Challenges Solved</h2>

          <ul>
            <li>Handling large volumes of real-time data.</li>
            <li>Optimizing dashboard loading performance.</li>
            <li>Designing intuitive visualizations for business users.</li>
            <li>Creating reusable dashboard templates.</li>
            <li>Providing actionable insights through interactive analytics.</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Project Outcome</h2>

          <p>
            Successfully developed scalable Kibana dashboards that improved
            operational visibility, enabled faster issue identification, and
            provided real-time business insights. The dashboards enhanced
            decision-making by presenting complex data through intuitive and
            interactive visualizations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default KibanaDashboard;