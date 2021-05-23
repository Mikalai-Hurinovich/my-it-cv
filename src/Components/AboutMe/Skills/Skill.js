import React from 'react';
import s from './Skills.module.scss'

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skill__icon}>
                <img title={props.title} className={s.img} src={props.icon} alt="skillIcon"/>
            </div>
        </div>
    );
};

export default Skill;
