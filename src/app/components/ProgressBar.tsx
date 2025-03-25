import React from "react";
import { theme } from "../theme";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  className = "",
}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className="h-2 w-10 rounded-lg"
          style={{
            backgroundColor:
              index < currentStep
                ? theme.colors.black
                : theme.colors.grayDarker,
          }}
        />
      ))}
    </div>
  );
};
