import React from "react";
import styled from "./CheckBox.module.css";

interface CheckBoxProps {
  isChecked: boolean;
  onClick: () => void;
  label: string;
}

export const CheckBox = ({ isChecked, onClick, label }: CheckBoxProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        id={"checkbox" + label}
        name={"checkbox" + label}
        checked={isChecked}
        onChange={onClick}
      />
      <label htmlFor={"checkbox" + label} className={styled.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};
