import React from 'react';
import s from './Button.module.scss'

const Button = (props) => {
    return (
        <div className={s.button__wrapper}>
            <button className={`${s.customButton} ${s.btn}`}>
                <a href={props.link} target='_blank' rel={'noreferrer'}>{props.title}</a>
            </button>
        </div>
    );
};

export default Button;
