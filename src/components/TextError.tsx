import React, { CSSProperties } from 'react';
import { FieldError } from 'react-hook-form';

interface ButtonProps {
    label?: FieldError;
    size?: string;
}

export const TextError = ({ label, size, ...props }: ButtonProps) => {
    const defaultButtonStyle: CSSProperties = {
        fontSize: size ?? '0.5rem',
        fontWeight: '800',
        color: '#e5383b',
        marginLeft: 10,
        letterSpacing: '0.08rem'
    };

    return label ? <div style={defaultButtonStyle}>{label.message}</div> : null;
};
