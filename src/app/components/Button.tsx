import React from "react";
import { theme } from "../theme";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  fontWeight?: "medium" | "semibold" | "bold";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  className = "",
  fontWeight = "semibold",
}) => {
  const bgColor =
    variant === "primary" ? theme.colors.accent : theme.colors.gray;
  const textColor =
    variant === "primary" ? theme.colors.white : theme.colors.black;

  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center rounded-xl py-3 w-full ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span
        className={`font-${fontWeight} text-2xl leading-tight tracking-tight -tracking-[0.03em]`}
      >
        {text}
      </span>
    </button>
  );
};
