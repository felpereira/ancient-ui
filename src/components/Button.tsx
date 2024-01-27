import React, { CSSProperties } from "react";
import styled from "./Button.module.css";

interface ButtonProps {
  label: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

export const Button = ({
  label,
  type = "button",
  width,
  ...props
}: ButtonProps) => {
  const defaultButtonStyle: CSSProperties = {
    minWidth: width ?? "100px",
  };

  return (
    <button
      type={type}
      id={"btn" + label.trim()}
      className={styled.button}
      style={defaultButtonStyle}
    >
      {label}
    </button>
  );
};
