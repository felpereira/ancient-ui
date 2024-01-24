import React, { CSSProperties } from "react";
import styled from "./Input.module.css";

interface InputProps {
  label: string;

  maxLength: number;
  password?: boolean;
  style?: CSSProperties;
  value: string | number | undefined;
  onChange: (valor: string) => void;
}

export const Input = ({
  label,

  style,
  password = false,
  maxLength = 20,
  value,
  onChange,
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
      <label className={styled.defaultLabel} htmlFor={"input" + label}>
        {label}
      </label>
      <div className={styled.defaultBorderInputStyle}>
        <input
          id={"input" + label}
          name={"input" + label}
          type={password ? "password" : "text"}
          maxLength={maxLength}
          style={{ ...defaultInputStyle, ...style }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
