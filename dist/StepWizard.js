"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StepWizard = ({ currentStep, totalSteps }) => {
    return (react_1.default.createElement("div", { className: "flex items-center justify-center mb-8" },
        react_1.default.createElement("div", { className: "flex items-center justify-center" }, Array.from({ length: totalSteps }).map((_, index) => (react_1.default.createElement(react_1.default.Fragment, { key: index },
            react_1.default.createElement("div", { className: `w-12 h-12 flex items-center justify-center rounded-full text-white font-bold transition-all duration-500
              ${index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-300'}
              ${index + 1 === currentStep ? 'transform scale-110 border border-blue-500 border-opacity-50' : ''}`, style: {
                    transitionDelay: index + 1 <= currentStep ? '700ms' : '0ms', // Circle transition happens after line
                } }, index + 1),
            index < totalSteps - 1 && (react_1.default.createElement("div", { className: `w-16 h-1 transition-all duration-700 
                ${index + 1 < currentStep ? 'bg-blue-500' : 'bg-gray-300'}`, style: {
                    transitionDelay: `${(index + 1) * 100}ms`, // Line fades in first
                } }))))))));
};
exports.default = StepWizard;
//# sourceMappingURL=StepWizard.js.map