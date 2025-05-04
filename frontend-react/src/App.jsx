import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MyProjects from './Pages/DashboardSections/MyProjects';
import DataImport from './Pages/DashboardSections/ImportData';
import Preprocessing from './Pages/DashboardSections/DataPreprocessing';
import DataAnalysis from './Pages/DashboardSections/DataAnalysis';
import Classification from './Pages/DashboardSections/Classification';
import Regression from './Pages/DashboardSections/Regression';
// Update these imports to point to NavbarSections
import About from './Pages/NavbarSections/About';
import Services from './Pages/NavbarSections/Services';
import Contact from './Pages/NavbarSections/Contact';
import Login from './Pages/NavbarSections/Login';

function App() {
  const [currentView, setCurrentView] = useState('MyProjects');

  const renderDashboard = () => {
    switch (currentView) {
      case 'MyProjects':
        return <MyProjects />;
      case 'DataImport':
        return <DataImport />;
      case 'Preprocessing':
        return <Preprocessing />;
      case 'DataAnalysis':
        return <DataAnalysis />;
      case 'Classification':
        return <Classification />;
      case 'Regression':
        return <Regression />;
      default:
        return <MyProjects />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="flex flex-1">
            <Sidebar setCurrentView={setCurrentView} />
            <div className="flex-1 p-4 overflow-y-auto">
              {renderDashboard()}
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;