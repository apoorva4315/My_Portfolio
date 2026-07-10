import "./ProjectDetails.css";

import { Link } from "react-router-dom";

import jobImage from "../assets/job.png";

const JobPortal = () => {
  return (
    <section className="project-details">

      <div className="project-container">

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>

        <img
          src={jobImage}
          alt="Job Portal"
          className="project-banner"
        />

        <h1>Job Portal Application</h1>

        <p className="overview">
          A modern and scalable Job Portal Application developed using React.js
          and TypeScript. The application enables users to browse job listings,
          search opportunities, apply filters, and explore detailed job
          information through an intuitive and responsive interface.
        </p>

        <div className="project-section">
          <h2>Project Overview</h2>

          <p>
            The objective of this project was to design a professional job
            search platform that delivers a smooth user experience while
            maintaining high performance and reusable architecture. The
            application follows modern frontend development practices including
            reusable components, state management, responsive layouts, and REST
            API integration.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Features</h2>

          <ul>
            <li>Job Search with keywords</li>
            <li>Location & Category Filters</li>
            <li>Responsive Design</li>
            <li>Dynamic Job Listings</li>
            <li>REST API Integration</li>
            <li>Loading Skeleton Screens</li>
            <li>Error Handling</li>
            <li>Reusable UI Components</li>
            <li>Pagination</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Technology Stack</h2>

          <div className="tech-list">
            <span>React.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Redux Toolkit</span>
            <span>REST API</span>
            <span>Vite</span>
          </div>
        </div>

        <div className="project-section">
          <h2>Architecture</h2>

          <p>
            The application is built using reusable React components with
            centralized state management. API services are separated from UI
            components to maintain scalability and clean project structure.
          </p>
        </div>

        <div className="project-section">
          <h2>Challenges Solved</h2>

          <ul>
            <li>Optimized rendering for faster page loads.</li>
            <li>Managed complex application state.</li>
            <li>Created reusable UI components.</li>
            <li>Handled API loading and error states efficiently.</li>
            <li>Implemented responsive layouts for all devices.</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Project Outcome</h2>

          <p>
            The application provides a seamless job searching experience,
            scalable frontend architecture, improved maintainability, and
            responsive design suitable for desktop, tablet, and mobile users.
          </p>
        </div>

      </div>

    </section>
  );
};

export default JobPortal;