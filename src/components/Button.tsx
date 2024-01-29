import React, { CSSProperties } from "react";
import styled from "./Button.module.css";

interface ButtonProps {
  label: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
  onClick?: () => void;
}

export const Button = ({
  label,
  type = "button",
  width,
  onClick,
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
      onClick={onClick}
    >
      {label}
    </button>
  );
};
