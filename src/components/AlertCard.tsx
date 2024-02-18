'use client';

import * as stylex from '@stylexjs/stylex';
import React from 'react';

import { Button } from './Button';

interface AlertCardBoxProps {
    text?: string;
    labelAgree?: string;
    labelRecuse?: string;
    onClickAgree?: () => void;
    onClickRecuse?: () => void;
}

const style = stylex.create({
    container: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    card: {
        width: '25rem',
        height: 'min-content',
        background: '#fff',
        borderRadius: '15px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    text: {
        width: '100%',
        height: '70%',
        textAlign: 'justify'
    },
    button: {
        paddingTop: '2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0.3125rem'
    }
});

export const AlertCard = ({
    onClickAgree,
    onClickRecuse,
    labelRecuse,
    labelAgree = 'Sim',
    text = undefined
}: AlertCardBoxProps) => {
    if (!text) return null;

    return (
        <div {...stylex.props(style.container)}>
            <div {...stylex.props(style.card)}>
                <div {...stylex.props(style.text)}>{text}</div>
                <div {...stylex.props(style.button)}>
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
