import React from 'react';

interface ProgressWizardProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressWizard: React.FC<ProgressWizardProps> = ({ currentStep, totalSteps }) => {
  const getProgressPercentage = () => {
    return (currentStep / totalSteps) * 100;
  };

  return (
    <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
        style={{ width: `${getProgressPercentage()}%` }}
      ></div>
    </div>
  );
};

export default ProgressWizard;