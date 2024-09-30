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
