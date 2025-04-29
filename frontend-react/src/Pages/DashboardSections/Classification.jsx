import React from 'react';

const Classification = () => {
  return (
    <div className="p-6 flex-1 bg-[#FFF3E0]">
      <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">Classification</h2>
      <p className="text-[#8B4513]/80 mb-6">
        Choose classification algorithms and train the model with your data.
      </p>
      <div className="space-y-4">
        <button className="w-full py-2 bg-[#8B4513] text-white rounded-lg">Train with Decision Tree</button>
        <button className="w-full py-2 bg-[#8B4513] text-white rounded-lg">Train with SVM</button>
      </div>
    </div>
  );
};

export default Classification;
