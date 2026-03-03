import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import JettPage from "./pages/JettPage";
import AgentsPage from "./pages/AgentsPage";
import AgentDetail from "./pages/AgentDetail";
import WeaponsPage from "./pages/WeaponsPage";
import WeaponDetail from "./pages/WeaponDetail";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/jett" element={<JettPage />} />
        <Route path="/weapons" element={<WeaponsPage />} />
        <Route path="/weapons/:id" element={<WeaponDetail />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
