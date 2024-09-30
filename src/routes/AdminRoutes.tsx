import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/Admin/DashboardPage";
import LoginPage from "../pages/Admin/LoginPage";
import SettingsPage from "../pages/Admin/SettingsPage";

const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </Router>
    );
};

export default AdminRoutes;