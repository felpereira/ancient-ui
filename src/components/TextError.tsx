import React, { CSSProperties } from "react";
import { FieldError } from "react-hook-form";

interface ButtonProps {
  label?: FieldError ;
  size?: string;
  weight?: string;
  style?: CSSProperties;
}

export const TextError = ({
  label,
  size,
  style,
  weight,
  ...props
}: ButtonProps) => {
  const defaultButtonStyle: CSSProperties = {
    fontSize: size ?? "0.5rem",
    fontWeight: weight ?? "800",
    color: "#e5383b",
    marginLeft: 10,
    letterSpacing: "0.08rem",
  };

  return label ? (
    <div style={{ ...defaultButtonStyle, ...style }}>{label.message}</div>
  ) : null;
};
