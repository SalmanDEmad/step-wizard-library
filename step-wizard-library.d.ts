declare module 'step-wizard-library' {
    import { ReactNode } from 'react';
  
    export interface WizardStepsProps {
      currentStep: number;
      totalSteps: number;
      handleNext: () => void;
      handlePrevious: () => void;
      handleSubmit: () => void;
      children: ReactNode; // Content for the current step
    }
  
    export const WizardSteps: React.FC<WizardStepsProps>;
  }  