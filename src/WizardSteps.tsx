import React from 'react';
import StepWizard from './StepWizard';

interface WizardStepsProps {
  currentStep: number;
  totalSteps: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSubmit: () => void;
  children: React.ReactNode; // Content for the current step
  bgColor?: string; // Optional prop to determine background color
  size?: 'small' | 'medium' | 'large'; // Optional prop to determine container size
}

const WizardSteps: React.FC<WizardStepsProps> = ({
  currentStep,
  totalSteps,
  handleNext,
  handlePrevious,
  handleSubmit,
  children,
  bgColor = 'white', // Default to white if not provided
  size = 'medium', // Default to medium size if not provided
}) => {
  // Define size classes based on the size prop
  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
  };

  return (
    <div
      className={`${sizeClasses[size]} mx-auto p-6 shadow-md rounded-lg`}
      style={{ backgroundColor: bgColor }} // Set background color based on the prop
    >
      {/* Step Indicator (Step Wizard) */}
      <StepWizard currentStep={currentStep} totalSteps={totalSteps} />

      {/* Step Content */}
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