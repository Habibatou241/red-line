import React from 'react';

const DataAnalysis = () => {
  return (
    <div className="p-6 flex-1 bg-[#FFF3E0]">
      <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Data Analysis</h2>
      <p className="text-[#8B4513]/80 mb-6">
        Perform an analysis on your data to gain insights and trends.
      </p>
      {/* Choix des types d'analyse */}
      <div className="space-y-4">
        <button className="w-full py-2 bg-[#8B4513] text-white rounded-lg">Correlation Analysis</button>
        <button className="w-full py-2 bg-[#8B4513] text-white rounded-lg">Descriptive Statistics</button>
      </div>
    </div>
  );
};

export default DataAnalysis;
