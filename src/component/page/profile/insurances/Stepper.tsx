import React from "react";
import { FiCheck } from "react-icons/fi";

interface StepperProps {
  steps: string[];
  currentStep: number; // The step index (starts from 1)
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 px-4">
      <div className="flex items-center">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300
                    ${
                      isCompleted
                        ? "bg-[var(--card)] border-[var(--primary)] text-[var(--primary)]"
                        : ""
                    }
                    ${
                      isActive
                        ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                        : ""
                    }
                    ${
                      !isCompleted && !isActive
                        ? "bg-[var(--card)] border-gray-300 text-gray-400"
                        : ""
                    }
                  `}
                >
                  {isCompleted ? <FiCheck size={20} /> : stepNumber}
                </div>
                <p
                  className={`mt-2 text-xs text-center ${
                    isActive
                      ? "text-[var(--primary)] font-semibold"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {label}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                  flex-1 h-0.5 mx-2 
                  ${
                    stepNumber < currentStep
                      ? "bg-[var(--primary)]"
                      : "bg-gray-300"
                  }
                `}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
