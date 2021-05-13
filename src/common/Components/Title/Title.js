import React from 'react';
import s from './Title.module.css'

const Title = (props) => {
    return (
        <div className={s.title}>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Title;
