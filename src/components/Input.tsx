import React, { CSSProperties } from "react";
import styled from "./Input.module.css";

interface InputProps {
  label: string;
  name: string;
  maxLength: number;
  password?: boolean;
  style?: CSSProperties;
}

export const Input = ({
  label,
  name,
  style,
  password = false,
  maxLength = 20,
  ...props
}: InputProps) => {
  const defaultInputStyle: CSSProperties = {
    fontFamily: "Aileron-Regular",
    width: password ? "90%" : "100%",
    background: "#c9caca",
    borderStyle: "none",
    outline: "none",
  };

  return (
    <div>
      <div className={styled.defaultLabel}>{label}</div>
      <div className={styled.defaultBorderInputStyle}>
        <input
          name={name}
          type={password ? "password" : "text"}
          maxLength={maxLength}
          style={{ ...defaultInputStyle, ...style }}
        />
      </div>
    </div>
  );
};
