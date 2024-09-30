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

## Code Example: src/pages/Public/HomePage.tsx
    import React from "react";

    const HomePage = () => {
        return (
            <>
                <div className="container py-3">
                    <h1>Home Page</h1>
                </div>
            </>
        );
    };

    export default HomePage;

## Code Example: src/pages/AboutPage.tsx
    import React from "react";

    const AboutPage = () => {
        return (
            <>
                <div className="container py-3">
                    <h1>About Page</h1>
                </div>
            </>
        );
    };

    export default AboutPage;

## Code Example: src/pages/Public/ContactPage.tsx
    import React from "react";

    const ContactPage = () => {
        return (
            <>
                <div className="container py-3">
                    <h1>Contact Page</h1>
                </div>
            </>
        );
    };

    export default ContactPage;

## Code Example: src/pages/Admin/LoginPage.tsx
    import React from "react";

    const LoginPage = () => {
        return (
            <>
                <div className="container py-3">
                    <h1>Login Page - Form</h1>
                </div>
            </>
        );
    };

    export default LoginPage;

## Code Example: src/pages/Admin/DashboardPage.tsx
    import React from "react";

    const DashboardPage = () => {
        return (
            <>
                <div className="container py-3">
                    <h1>Dashboard Page</h1>
                </div>
            </>
        );
    };

    export default DashboardPage;

## Code Example: src/pages/Admin/SettingsPage.tsx
    import React from "react";

    const SettingsPage = () => {
        return (
            <>
                <div className="container py-3">
                    <h1>Settings Page</h1>
                </div>
            </>
        );
    };

    export default SettingsPage;

## Code Example: src/components/global/Header.tsx
    import React from "react";

    const Header = () => {
        return (
            <>
                <header className="container header">
                    <h1 className="text-info p-3 px-0">React TypeScript App</h1>
                </header>
            </>
        );
    };

    export default Header;

## Code Example: src/components/global/Footer.tsx
    import React from "react";

    const Footer = () => {
        return (
            <div className="container border border-info rounded">
                <p className="text-center m-0 p-0">Learn React TypeScript</p>
            </div>
        );
    };

    export default Footer;

## Code Example: src/components/global/Menu.tsx
    import React from "react";

    const Menu = () => {
        const linkUrl = window.location.pathname;
        return (
            <>
                <div className="container menu d-flex justify-content-end border border-info p-3 rounded">
                    <a href="/"
                        className={`btn btn-sm me-2 ${linkUrl === '/' ? 'btn-info' : 'btn-default'}`}
                    >Home</a>
                    
                    <a href="/about"
                        className={`btn btn-sm me-2 ${linkUrl === '/about' ? 'btn-info' : 'btn-default'}`}
                    >About</a>
                    <a href="contact"
                        className={`btn btn-sm me-2 ${linkUrl === '/contact' ? 'btn-info' : 'btn-default'}`}
                    >Contact</a>
                    <a href="login" 
                        className={`btn btn-sm me-2 ${linkUrl === '/login' ? 'btn-info' : 'btn-default'}`}
                    >Login</a>
                </div>
            </>
        );
    };

    export default Menu;

## Code Example: App.tsx
    import React from 'react';
    import PublicRoutes from './routes/PublicRoutes';
    import AdminRoutes from './routes/AdminRoutes';
    import Header from './components/global/Header';
    import Menu from './components/global/Menu';
    import Footer from './components/global/Footer';

    function App() {
    return (
        <>
        <Header />
        <Menu />
        <PublicRoutes />
        <AdminRoutes />
        <Footer />
        </>
    );
    }

    export default App;

## Props:
In my Apps.tsx file contains a const value projectName. the variable value pass to the Header component and header component file - the props data will fetch and print. so i update the App.tsx file code - 

    import React from 'react';    
    import Header from './components/global/Header';
    import Menu from './components/global/Menu';
    import Footer from './components/global/Footer';
    import PublicRoutes from './routes/PublicRoutes';
    import AdminRoutes from './routes/AdminRoutes';

    function App() {
    const projectName = 'React TypeScript App';

    return (
        <>
        <Header projectName={projectName} />
        <Menu />
        <PublicRoutes />
        <AdminRoutes />
        <Footer />
        </>
    );
    }

    export default App;

## Updated Code Example: src/components/global/Header.tsx - 
    import React from "react";

    interface HeaderProps {
        projectName: string
    }
    const Header: React.FC<HeaderProps> = ({projectName}) => {
        return (
            <>
                <header className="container header">
                    <h1 className="text-info p-3 px-0">{projectName}</h1>
                </header>
            </>
        );
    };

    export default Header;