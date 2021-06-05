import React from 'react';
import s from './Button.module.scss'

const Button = (props) => {
    return (
        <div className={s.button__wrapper}>
            <button className={`${s.custom} ${s.button}`}><span>{props.title}</span></button>
        </div>
    );
};

export default Button;
