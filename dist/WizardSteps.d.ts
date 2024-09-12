import React from 'react';
interface WizardStepsProps {
    currentStep: number;
    totalSteps: number;
    handleNext: () => void;
    handlePrevious: () => void;
    handleSubmit: () => void;
    children: React.ReactNode;
}
declare const WizardSteps: React.FC<WizardStepsProps>;
export default WizardSteps;
