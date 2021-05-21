import React from 'react';
import s from './Skills.module.scss'

const Skills = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skill__icon}>
                <img className={s.img} src={props.icon} alt="skillIcon"/>
            </div>
        </div>
    );
};

export default Skills;
