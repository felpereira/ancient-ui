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
    background: "#d3d3d3",
    borderStyle: "none",
    outline: "none",
  };

  return (
    <div>
      <label className={styled.defaultLabel} htmlFor={"checkbox" + label}>
        {label}
      </label>
      <div className={styled.defaultBorderInputStyle}>
        <input
          id={"checkbox" + label}
          name={"checkbox" + label}
          type={password ? "password" : "text"}
          maxLength={maxLength}
          style={{ ...defaultInputStyle, ...style }}
        />
      </div>
    </div>
  );
};
