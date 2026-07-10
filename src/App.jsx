import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobPortal from "./pages/JobPortal";
import InvoiceDashboard from "./pages/InvoiceDashboard";
import KibanaDashboard from "./pages/KibanaDashboard";
import UIUXCaseStudy from "./pages/UIUXCaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/job-portal" element={<JobPortal />} />
        <Route path="/projects/invoice-dashboard" element={<InvoiceDashboard />}/>
        <Route path="/projects/kibana-dashboard" element={<KibanaDashboard />}/>
        <Route path="/projects/uiux-case-study" element={<UIUXCaseStudy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
