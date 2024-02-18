import * as stylex from '@stylexjs/stylex';
import React, { forwardRef } from 'react';

import { FieldError } from './Input';
import { TextError } from './TextError';

const style = stylex.create({
    checkBox: {
        fontFamily:
            '"Aileron-Regular", Helvetica, Arial, Verdana, Tahoma, sans-serif',
        fontSize: '0.75rem',
        userSelect: 'none',
        paddingLeft: '0.2rem'
    }
});

interface CheckBoxProps {
    isChecked: boolean;
    onClick: () => void;
    label: string;
    fieldError?: FieldError;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ isChecked, onClick, label, fieldError }: CheckBoxProps, ref) => {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="checkbox"
                    id={'checkbox' + label}
                    name={'checkbox' + label}
                    checked={isChecked}
                    onChange={onClick}
                    ref={ref}
                />
                <label
                    htmlFor={'checkbox' + label}
                    {...stylex.props(style.checkBox)}
                >
                    {label}
                </label>
                <TextError
                    label={fieldError}
                    size={'0.8rem'}
                />
            </div>
        );
    }
);

CheckBox.displayName = 'CheckBox';
