import * as stylex from '@stylexjs/stylex';
import React, { CSSProperties, forwardRef } from 'react';
import type { Message, MultipleFieldErrors, Ref } from 'react-hook-form';

import { TextError } from './TextError';

const style = stylex.create({
    defaultLabel: {
        fontFamily:
            '"Aileron-Regular", Helvetica, Arial, Verdana, Tahoma, sans-serif',
        paddingLeft: '5px',
        fontSize: '12px',
        userSelect: 'none'
    },
    defaultBorderInputStyle: {
        padding: '10px',
        margin: '5px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        fontFamily:
            '"Aileron-Regular", Helvetica, Arial, Verdana, Tahoma, sans-serif',
        backgroundColor: '#d3d3d3'
    },
    defaultInputStyle: {
        fontFamily:
            '"Aileron-Regular", Helvetica, Arial, Verdana, Tahoma, sans-serif',
        background: '#d3d3d3',
        borderStyle: 'none',
        outline: 'none'
    }
});

export type FieldError = {
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
};

interface InputProps {
    label: string;
    password?: boolean;

    maxLength?: number;
    fieldError?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,

            fieldError,
            password = false,
            maxLength = 50,
            ...props
        },
        ref
    ) => {
        const defaultInputStyle: CSSProperties = {
            width: password ? '90%' : '100%'
        };

        return (
            <div>
                <label
                    {...stylex.props(style.defaultLabel)}
                    htmlFor={'input' + label}
                >
                    {label}
                </label>
                <div {...stylex.props(style.defaultBorderInputStyle)}>
                    <input
                        ref={ref}
                        id={'input' + label}
                        maxLength={maxLength}
                        type={password ? 'password' : 'text'}
                        {...stylex.props(style.defaultInputStyle)}
                        style={{ ...defaultInputStyle }}
                        {...props}
                    />
                </div>
                <TextError
                    label={fieldError}
                    size={'0.8rem'}
                />
            </div>
        );
    }
);

Input.displayName = 'Input';
