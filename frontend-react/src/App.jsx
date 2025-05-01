import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MyProjects from './Pages/DashboardSections/MyProjects';
import DataImport from './Pages/DashboardSections/ImportData';
import Preprocessing from './Pages/DashboardSections/DataPreprocessing';
import DataAnalysis from './Pages/DashboardSections/DataAnalysis';
import Classification from './Pages/DashboardSections/Classification';
import Regression from './Pages/DashboardSections/Regression';

function App() {
  const [currentView, setCurrentView] = useState('MyProjects');

  const renderComponent = () => {
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
    <div className="flex h-screen">
      <Sidebar setCurrentView={setCurrentView} />
      <div className="flex-1 p-4 overflow-y-auto">{renderComponent()}</div>
    </div>
  );
}

export default App;