import * as stylex from '@stylexjs/stylex';
import React, { CSSProperties } from 'react';
import { FieldError } from 'react-hook-form';

const style = stylex.create({
    defaultTextErrorStyle: {
        fontWeight: '800',
        color: '#e5383b',
        marginLeft: '10px',
        letterSpacing: '0.08rem'
    }
});
interface ButtonProps {
    label?: FieldError;
    size?: string;
}

export const TextError = ({ label, size, ...props }: ButtonProps) => {
    const defaultTextErrorStyle: CSSProperties = {
        fontSize: size ?? '0.5rem'
    };

    return label ? (
        <div
            {...stylex.props(style.defaultTextErrorStyle)}
            style={defaultTextErrorStyle}
        >
            {label.message}
        </div>
    ) : null;
};
