import React, { CSSProperties } from 'react';

import styled from './Button.module.css';

interface ButtonProps {
    label: string;
    width?: string;
    type?: 'button' | 'submit' | 'reset';
    style?: CSSProperties;
    onClick?: () => void;
}

export const Button = ({
    label,
    type = 'button',
    width,
    onClick,
    style,
    ...props
}: ButtonProps) => {
    const defaultButtonStyle: CSSProperties = {
        minWidth: width ?? '100px',
        margin: '0px 5px 0px 5px'
    };

    return (
        <button
            type={type}
            id={'btn' + label.trim()}
            className={styled.button}
            style={{ ...defaultButtonStyle, ...style }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
