import React, { CSSProperties } from "react";

interface ButtonProps {
  label: string;
  size?: string;
  weight?: string;
  style?: CSSProperties;
}

export const Text = ({ label, size, style, weight, ...props }: ButtonProps) => {
  const defaultButtonStyle: CSSProperties = {
    fontSize: size ?? "1rem",
    fontWeight: weight ?? "400",
  };

  return <div style={{ ...defaultButtonStyle, ...style }}>{label}</div>;
};

const defaultButtonStyle: CSSProperties = {
  fontSize: "1rem",
};
