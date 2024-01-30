"use client";
import React from "react";
import styled from "./AlertCard.module.css";
import { Button } from "./Button";

interface AlertCardBoxProps {
  text?: string;
  onClickAgree?: () => void;
  onClickRecuse?: () => void;
}

export const AlertCard = ({
  onClickAgree,
  onClickRecuse,
  text = undefined,
}: AlertCardBoxProps) => {
  if (!text) return null;

  return (
    <div className={styled.container}>
      <div className={styled.card}>
        {/* tamanho maximo 240 */}
        <div className={styled.text}>{text}</div>
        <div className={styled.button}>
          <Button label="Não" onClick={onClickRecuse} />
          <Button label="Sim" type={"submit"} />
        </div>
      </div>
    </div>
  );
};
