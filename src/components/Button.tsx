import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import React from 'react';

const style = stylex.create({
    button: {
        fontFamily:
            '"Aileron-Regular", Helvetica, Arial, Verdana, Tahoma, sans-serif',
        margin: '0px 5px 0px 5px',
        fontWeight: '600',
        backgroundColor: {
            default: '#d3d3d3',
            ':hover:': '#f5f3f4'
        },
        cursor: { default: 'default', ':hover:': 'pointer' },
        border: '1px solid #ccc',
        borderRadius: '20px',
        minHeight: '30px',
        transition: 'background 0.3s',
        padding: '0rem 1rem 0rem 1rem'
    }
});

interface ButtonProps {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    style?: StyleXStyles<{
        backgroundColor?: string;
        color?: string;
    }>;
    onClick?: () => void;
}

export const Button = ({
    label,
    type = 'button',
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            id={'btn' + label.trim()}
            {...stylex.props(style.button)}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
