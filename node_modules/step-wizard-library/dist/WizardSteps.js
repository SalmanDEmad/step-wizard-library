"use strict";
// src/WizardSteps.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StepWizard_1 = __importDefault(require("./StepWizard"));
const WizardSteps = ({ currentStep, totalSteps, handleNext, handlePrevious, handleSubmit, children, }) => {
    return (react_1.default.createElement("div", { className: "max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg" },
        react_1.default.createElement(StepWizard_1.default, { currentStep: currentStep, totalSteps: totalSteps }),
        react_1.default.createElement("div", { className: "mt-6" }, children),
        react_1.default.createElement("div", { className: "flex justify-between mt-6" },
            react_1.default.createElement("button", { className: "px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50", onClick: handlePrevious, disabled: currentStep <= 1 }, "Previous"),
            currentStep < totalSteps ? (react_1.default.createElement("button", { className: "px-4 py-2 bg-blue-500 text-white rounded-md", onClick: handleNext }, "Next")) : (react_1.default.createElement("button", { className: "px-4 py-2 bg-green-500 text-white rounded-md", onClick: handleSubmit }, "Submit Form")))));
};
exports.default = WizardSteps;
//# sourceMappingURL=WizardSteps.js.map