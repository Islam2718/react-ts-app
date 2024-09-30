import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "../pages/Public/AboutPage";
import ContactPage from "../pages/Public/ContactPage";
import HomePage from "../pages/Public/HomePage";

const PublicRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default PublicRoutes;