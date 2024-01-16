import React, { CSSProperties } from "react";

interface InputProps {
  label: string;
  name: string;
  maxLength: number;
  password?: boolean;
  style?: CSSProperties;
  styleLabel?: CSSProperties;
}

export const Input = ({
  label,
  name,
  style,
  styleLabel,
  password = false,
  maxLength = 20,
  ...props
}: InputProps) => {
  const defaultInputStyle: CSSProperties = {
    fontFamily: "Aileron-Regular",
    width: password ? "80%" : "100%",
    background: "#F8F8F8",
    borderStyle: "none",

    outline: "none",
  };

  return (
    <div>
      <div style={{ ...defaultLabelStyle, ...styleLabel }}>{label}</div>
      <div style={defaultBorderInputStyle}>
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

const defaultLabelStyle: CSSProperties = {
  paddingLeft: "5px",
  fontFamily: "Aileron-Light",
  fontSize: "12px",
};

const defaultBorderInputStyle: CSSProperties = {
  padding: "5px",
  margin: "5px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontFamily: "Aileron-Regular",
  background: "#F8F8F8",
};
