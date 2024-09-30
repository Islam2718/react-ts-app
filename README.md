# React App with Typescript Template - Tutorial

Here, I will create a React project with TypeScript template. I use on this project ReactDom and Bootstrap. 

## Clone and Run This Proejct:
    open terminal and run below command - 
    - git clone https://github.com/Islam2718/react-ts-app.git 
    - cd react-ts-app
    - npm install
    - npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Developement from 0: 
    - ensure node on your machine. 
    - create react project: npx create-react-app react-ts-app --template typescript
    - Entire on this project folder: cd react-ts-app
    - Run Project: npm start

### Create folder into src: 
    - components
    - pages
    - routes

### create file into routes: 
    - AdminRoutes.tsx
    - PublicRoutes.tsx
    [notes: you can use your own_name.tsx]

### Create Folder & file into pages folder: 
    - Public/HomePage.tsx
    - Public/AboutPage.tsx
    - Public/ContactPage.tsx
    - Admin/DashboardPage.tsx
    - Admin/LoginPage.tsx
    - Admin/SettingsPage.tsx

## install ReactDom: 
    npm install react-router-dom @types/react-router-dom

## install bootstrap: 
    - npm install bootstrap
    - npm install react-bootstrap @types/react-bootstrap
    - To Import Bootstrap CSS open and edit index.tsx file: import 'bootstrap/dist/css/bootstrap.min.css';
    - Use: import { Button, Card } from 'react-bootstrap'; in component file. 

## Code Example: PublicRoutes.tsx
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

### Code Example: AdminRoutes.tsx
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