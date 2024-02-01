'use client';

import React from 'react';

import styled from './AlertCard.module.css';
import { Button } from './Button';

interface AlertCardBoxProps {
    text?: string;
    labelAgree?: string;
    labelRecuse?: string;
    onClickAgree?: () => void;
    onClickRecuse?: () => void;
}

export const AlertCard = ({
    onClickAgree,
    onClickRecuse,
    labelRecuse,
    labelAgree = 'Sim',
    text = undefined
}: AlertCardBoxProps) => {
    if (!text) return null;

    return (
        <div className={styled.container}>
            <div className={styled.card}>
                {/* tamanho maximo 240 */}
                <div className={styled.text}>{text}</div>
                <div className={styled.button}>
                    {labelRecuse && (
                        <Button
                            label={labelRecuse}
                            onClick={onClickRecuse}
                        />
                    )}
                    <Button
                        label={labelAgree}
                        type={'submit'}
                        onClick={onClickAgree}
                    />
                </div>
            </div>
        </div>
    );
};
