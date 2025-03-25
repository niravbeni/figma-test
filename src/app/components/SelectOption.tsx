import React from "react";
import { theme } from "../theme";

interface SelectOptionProps {
  text: string;
  onClick?: () => void;
  selected?: boolean;
  color?: string;
  className?: string;
}

export const SelectOption: React.FC<SelectOptionProps> = ({
  text,
  onClick,
  selected = false,
  color,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl ${
        selected ? "border-2 border-black" : ""
      } ${className}`}
      style={{ backgroundColor: theme.colors.gray }}
    >
      {color ? (
        <div className="flex items-center gap-2 px-3 py-1">
          <div
            className="w-6 h-6 rounded-md"
            style={{ backgroundColor: color }}
          />
          <span
            className="font-medium text-2xl leading-tight -tracking-[0.03em]"
            style={{ color }}
          >
            {text}
          </span>
        </div>
      ) : (
        <span className="font-medium text-2xl px-3 py-1 leading-tight -tracking-[0.03em] text-black">
          {text}
        </span>
      )}
    </button>
  );
};
