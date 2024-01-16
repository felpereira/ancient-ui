import React, { CSSProperties } from "react";
import styled from "./Button.module.css";

interface ButtonProps {
  label: string;
  name: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

export const Button = ({
  label,
  name,
  type = "button",
  width,
  style,
  ...props
}: ButtonProps) => {
  const defaultButtonStyle: CSSProperties = {
    fontFamily: "Aileron-Regular",
    background: "#c9caca",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: width ?? "100px",
    height: "30px",
    transition: "background 0.3s",
  };

  return (
    <button
      type={type}
      id={"btn" + label.trim()}
      className={styled.button}
      style={{
        ...defaultButtonStyle,
        ...style,
      }}
      // disabled={!canClose}
      // onClick={this.handleClose.bind(this)}
    >
      {label + "2"}
    </button>
  );
};

const defaultBorderButtonStyle: CSSProperties = {
  // padding: "5px",
  // margin: "5px",
  // borderRadius: "10px",
  // border: "1px solid #ccc",
  // fontFamily: "Aileron-Regular",
  // background: "#F8F8F8",
};
