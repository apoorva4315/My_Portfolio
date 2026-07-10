import "./ProjectDetails.css";
import { Link } from "react-router-dom";

import uiux from "../assets/figma.png";

const UIUXCaseStudy = () => {
  return (
    <section className="project-details">
      <div className="project-container">

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>

        <img
          src={uiux}
          alt="UI UX Design System"
          className="project-banner"
        />

        <h1>UI/UX Design System & Enterprise Use Cases</h1>

        <p className="overview">
          Designed and delivered 30+ enterprise UI/UX use cases for web
          applications at Kyndryl using Figma. Created intuitive user
          experiences through wireframes, prototypes, responsive layouts, and
          reusable design systems while collaborating closely with developers
          and business stakeholders.
        </p>


        <div className="project-section">

          <h2>Project Overview</h2>

          <p>
            As a UI/UX Designer, I worked on multiple enterprise products where
            I transformed business requirements into clean, modern, and
            user-friendly interfaces. My responsibilities included requirement
            analysis, user flow creation, wireframing, high-fidelity UI design,
            prototyping, and developer handoff.
          </p>

        </div>

        <div className="project-section">

          <h2>My Contributions</h2>

          <ul>
            <li>Designed 30+ enterprise application use cases.</li>
            <li>Created wireframes and interactive prototypes.</li>
            <li>Designed responsive desktop and tablet layouts.</li>
            <li>Built reusable UI components and design systems.</li>
            <li>Collaborated with developers for pixel-perfect implementation.</li>
            <li>Worked closely with product owners and business teams.</li>
            <li>Reduced UI rework by 30% through clear design specifications.</li>
            <li>Maintained design consistency across multiple products.</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Design Process</h2>

          <ul>
            <li>Requirement Gathering</li>
            <li>User Research</li>
            <li>User Flow Creation</li>
            <li>Wireframing</li>
            <li>High-Fidelity UI Design</li>
            <li>Interactive Prototyping</li>
            <li>Design Reviews</li>
            <li>Developer Handoff</li>
            <li>Implementation Support</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Enterprise Use Cases Designed</h2>

          <ul>
            <li>Analytics Dashboards</li>
            <li>Authentication & Login Screens</li>
            <li>User Management</li>
            <li>Employee Management</li>
            <li>Reports & Analytics</li>
            <li>Search & Filter Interfaces</li>
            <li>Data Tables</li>
            <li>Forms & Data Entry</li>
            <li>Approval Workflows</li>
            <li>Notifications</li>
            <li>Settings & Preferences</li>
            <li>Profile Management</li>
            <li>KPI Dashboards</li>
            <li>Responsive Landing Pages</li>
            <li>30+ Enterprise Product Screens</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Design Deliverables</h2>

          <ul>
            <li>User Personas</li>
            <li>User Journey Maps</li>
            <li>Wireframes</li>
            <li>Interactive Prototypes</li>
            <li>UI Design Specifications</li>
            <li>Design System</li>
            <li>Reusable Components</li>
            <li>Developer Handoff Documentation</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Tools & Technologies</h2>

          <div className="tech-list">

            <span>Figma</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
            <span>Auto Layout</span>
            <span>Components</span>
            <span>Variants</span>
            <span>Design System</span>
            <span>User Flows</span>
            <span>Responsive Design</span>

          </div>

        </div>


        <div className="project-section">

          <h2>Challenges Solved</h2>

          <ul>
            <li>Designed scalable interfaces for multiple business modules.</li>
            <li>Created reusable components to improve design consistency.</li>
            <li>Simplified complex business workflows into intuitive user experiences.</li>
            <li>Improved collaboration between designers and developers.</li>
            <li>Balanced business requirements with usability and accessibility.</li>
          </ul>

        </div>


        <div className="project-section">

          <h2>Project Outcome</h2>

          <p>
            Successfully delivered over 30 enterprise UI/UX use cases that
            improved usability, consistency, and user satisfaction. The designs
            reduced development rework by approximately 30%, streamlined
            developer handoff, and established reusable design standards across
            multiple applications.
          </p>

        </div>

      </div>
    </section>
  );
};

export default UIUXCaseStudy;