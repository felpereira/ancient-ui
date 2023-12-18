import React, { CSSProperties } from "react";

interface ButtonProps {
  label: string;
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  style?: CSSProperties;
}

export const Button = ({
  label,
  name,
  type = "button",
  style,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        id="btnCancelarOpcoes"
        style={{ ...defaultButtonStyle, ...style }}
        // disabled={!canClose}
        // onClick={this.handleClose.bind(this)}
      >
        {label}
      </button>
    </div>
  );
};

const defaultButtonStyle: CSSProperties = {
  paddingLeft: "5px",
  fontFamily: "Aileron-Regular",
  background: "#F8F8F8",
  border: "1px solid #ccc",
  borderRadius: "15px",
  width: "100px",
  height: "25px",
};

const defaultBorderButtonStyle: CSSProperties = {
  // padding: "5px",
  // margin: "5px",
  // borderRadius: "10px",
  // border: "1px solid #ccc",
  // fontFamily: "Aileron-Regular",
  // background: "#F8F8F8",
};
