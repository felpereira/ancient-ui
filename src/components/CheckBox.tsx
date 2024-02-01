import React, { Ref, RefObject, forwardRef, useImperativeHandle } from 'react';

import styled from './CheckBox.module.css';
import { FieldError } from './Input';
import { TextError } from './TextError';

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
                    className={styled.checkboxLabel}
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
