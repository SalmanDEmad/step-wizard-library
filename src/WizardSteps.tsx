// src/WizardSteps.tsx

import React from 'react';
import StepWizard from './StepWizard';

interface WizardStepsProps {
  currentStep: number;
  totalSteps: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSubmit: () => void;
  children: React.ReactNode; // Content for the current step
}

const WizardSteps: React.FC<WizardStepsProps> = ({
  currentStep,
  totalSteps,
  handleNext,
  handlePrevious,
  handleSubmit,
  children,
}) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Step Indicator (Step Wizard) */}
      <StepWizard currentStep={currentStep} totalSteps={totalSteps} />

      {/* Step Content (Passed from StepWizardContainer) */}
      <div className="mt-6">
        {children}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
          onClick={handlePrevious}
          disabled={currentStep <= 1}
        >
          Previous
        </button>

        {currentStep < totalSteps ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit Form
          </button>
        )}
      </div>
    </div>
  );
};

export default WizardSteps;