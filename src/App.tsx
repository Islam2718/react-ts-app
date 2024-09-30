import React from 'react';
// import { useLocation } from 'react-router-dom';
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
