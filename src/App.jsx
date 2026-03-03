import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JettPage from "./pages/JettPage";
import AgentsPage from "./pages/AgentsPage";
import WeaponsPage from "./pages/WeaponsPage";
import WeaponDetail from "./pages/WeaponDetail";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/jett" element={<JettPage />} />
        <Route path="/weapons" element={<WeaponsPage />} />
        <Route path="/weapons/:id" element={<WeaponDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
