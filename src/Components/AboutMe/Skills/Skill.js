import React from 'react';
import s from './Skills.module.scss'
import Fade from "react-reveal/Fade";

const Skill = (props) => {
    return (
        <Fade>
            <div className={s.skill}>
                <div className={s.skill__icon}>
                    <img title={props.title} className={s.img} src={props.icon} alt="skillIcon"/>
                </div>
            </div>
        </Fade>
    );
};

export default Skill;
