import React from 'react';
import s from './Button.module.scss'

const Button = (props) => {
    return (
        <div className={s.button__wrapper}>
            <button className={s.button}>{props.title}</button>
        </div>
    );
};

export default Button;
