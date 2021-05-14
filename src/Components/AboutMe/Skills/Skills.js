import React from 'react';
import s from './Skills.module.scss'

const Skills = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skill__icon}></div>
            <h3 className={s.skill__title}>{props.title}</h3>
            <span className={s.skill__text}>{props.description}</span>
        </div>
    );
};

export default Skills;
