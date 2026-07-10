import "./ProjectDetails.css";
import { Link } from "react-router-dom";

import dashboard from "../assets/invoice.png";

const InvoiceDashboard = () => {
  return (
    <section className="project-details">

      <div className="project-container">

        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>

        <img
          src={dashboard}
          alt="Invoice Payment Analytics Dashboard"
          className="project-banner"
        />

        <h1>Invoice Payment Analytics Dashboard</h1>

        <p className="overview">
          An AI-powered Invoice Payment Analytics Dashboard developed to analyze
          invoice payment behavior, predict payment delays, identify customer
          risk, and provide actionable business insights through interactive
          dashboards and machine learning models.
        </p>


        <div className="project-section">

          <h2>Project Overview</h2>

          <p>
            This project was developed to help finance teams monitor invoice
            payments, analyze customer payment behavior, detect high-risk
            customers, and reduce financial losses. The dashboard combines data
            visualization with machine learning to deliver intelligent business
            insights and predictive analytics.
          </p>

        </div>

        <div className="project-section">

          <h2>Key Features</h2>

          <ul>
            <li>CSV File Upload</li>
            <li>Interactive KPI Dashboard</li>
            <li>Customer Payment Analysis</li>
            <li>Revenue & Loss Tracking</li>
            <li>Monthly Trend Analysis</li>
            <li>Customer Segmentation using K-Means</li>
            <li>Invoice Delay Prediction</li>
            <li>Default Risk Prediction</li>
            <li>Interactive Charts & Graphs</li>
            <li>Responsive Dashboard UI</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Dashboard KPIs</h2>

          <ul>
            <li>Total Clients</li>
            <li>Total Invoices</li>
            <li>Total Revenue</li>
            <li>Total Loss</li>
            <li>Default Rate</li>
            <li>Average Payment Delay</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Machine Learning Models</h2>

          <ul>
            <li>Customer Segmentation (K-Means Clustering)</li>
            <li>Invoice Default Prediction</li>
            <li>Payment Delay Prediction</li>
            <li>Customer Risk Classification</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Technology Stack</h2>

          <div className="tech-list">

            <span>React.js</span>
            <span>Python</span>
            <span>Gradio</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Scikit-Learn</span>
            <span>Matplotlib</span>
            <span>K-Means</span>
            <span>Machine Learning</span>

          </div>

        </div>

        <div className="project-section">

          <h2>Visualizations</h2>

          <ul>
            <li>Monthly Revenue Trend</li>
            <li>Monthly Loss Analysis</li>
            <li>Customer Default Distribution</li>
            <li>Payment Status Summary</li>
            <li>Cluster Visualization</li>
          </ul>

        </div>

        <div className="project-section">

          <h2>Challenges Solved</h2>

          <ul>
            <li>Handling large invoice datasets efficiently.</li>
            <li>Improving dashboard performance.</li>
            <li>Creating reusable visualization components.</li>
            <li>Implementing accurate customer segmentation.</li>
            <li>Designing a user-friendly analytics dashboard.</li>
          </ul>

        </div>


        <div className="project-section">

          <h2>Project Outcome</h2>

          <p>
            Successfully built an intelligent analytics platform capable of
            predicting payment risks, monitoring business performance, and
            helping organizations make data-driven financial decisions. The
            solution provides clear insights into customer behavior, improves
            decision-making, and enhances operational efficiency.
          </p>

        </div>

      </div>

    </section>
  );
};

export default InvoiceDashboard;