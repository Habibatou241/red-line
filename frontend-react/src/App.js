import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './Pages/Hero';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Dashboard';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('hero');

  const renderPage = () => {
    switch(currentPage) {
      case 'hero':
        return <Hero onRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <Register onLoginClick={() => setCurrentPage('login')} />;
      case 'login':
        return <Login onLoginSuccess={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return <Dashboard onProjectsClick={() => setCurrentPage('projects')} />;
      case 'projects':
        return <Projects />;
      // Dans votre switch case, ajoutez :
      case 'about':
        return <About />;
      default:
        return <Hero onRegister={() => setCurrentPage('register')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onLoginClick={() => setCurrentPage('login')} 
        showNavigation={currentPage !== 'dashboard'}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
