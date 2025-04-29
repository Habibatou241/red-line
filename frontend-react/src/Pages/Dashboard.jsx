import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import NewProject from './DashboardSections/NewProject';
import MyProjects from './DashboardSections/MyProjects';
import AddFile from './DashboardSections/AddFile';
import NewFolder from './DashboardSections/NewFolder';
import ImportData from './DashboardSections/ImportData';
import DataPreprocessing from './DashboardSections/DataPreprocessing';
import DataAnalysis from './DashboardSections/DataAnalysis';
import Classification from './DashboardSections/Classification';
import Regression from './DashboardSections/Regression';
import Settings from './DashboardSections/Settings';

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('MyProjects');

  const renderSection = () => {
    switch (selectedSection) {
      case 'NewProject': return <NewProject />;
      case 'MyProjects': return <MyProjects />;
      case 'AddFile': return <AddFile />;
      case 'NewFolder': return <NewFolder />;
      case 'ImportData': return <ImportData />;
      case 'DataPreprocessing': return <DataPreprocessing />;
      case 'DataAnalysis': return <DataAnalysis />;
      case 'Classification': return <Classification />;
      case 'Regression': return <Regression />;
      case 'Settings': return <Settings />;
      default: return <MyProjects />;
    }
  };

  return (
    <div className="flex h-screen bg-[#FFF8F0]">
      <Sidebar onSelectSection={setSelectedSection} />
      <div className="flex-1 p-6 overflow-y-auto">{renderSection()}</div>
    </div>
  );
};

export default Dashboard;
