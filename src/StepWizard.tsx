import React from 'react';

interface StepWizardProps {
  currentStep: number;
  totalSteps: number;
}

const StepWizard: React.FC<StepWizardProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center justify-center">
        {Array.from({ length: totalSteps }).map((_, index: number) => (
          <React.Fragment key={index}>
            {/* Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold transition-all duration-500
              ${index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}
              ${index + 1 === currentStep ? 'transform scale-110 border border-blue-500 border-opacity-50' : ''}`}
              style={{
                transitionDelay: index + 1 <= currentStep ? '700ms' : '0ms', // Circle transition happens after line
              }}
            >
              {index + 1}
            </div>

            {/* Line between circles (except after the last circle) */}
            {index < totalSteps - 1 && (
              <div
                className={`w-16 h-1 transition-all duration-700 
                ${index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}
                style={{
                  transitionDelay: `${(index + 1) * 100}ms`, // Line fades in first
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepWizard;