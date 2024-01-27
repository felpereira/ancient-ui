import React, { CSSProperties, forwardRef } from "react";
import styled from "./Input.module.css";
import { TextError } from "./TextError";
import { FieldError } from "react-hook-form/dist/types/errors";

interface InputProps {
  label: string;
  password?: boolean;
  style?: CSSProperties;
  maxLength?: number;
  fieldError?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, style, fieldError, password = false, maxLength = 50, ...props },
    ref
  ) => {
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
            ref={ref}
            id={"input" + label}
            name={"input" + label}
            maxLength={maxLength}
            type={password ? "password" : "text"}
            style={{ ...defaultInputStyle, ...style }}
            {...props}
          />
        </div>
        <TextError label={fieldError} size={"0.5rem"} />
      </div>
    );
  }
);
