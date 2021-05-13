import React from 'react';
import s from './Projects.module.css'

const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.project__wrapper}>
                <div className={s.project__preview} style={props.style}>
                    <button className={s.project__button}>Show</button>
                </div>
            </div>
            <h3 className={s.project__title}>{props.title}</h3>
            <div className={s.project__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum
                eius enim explicabo minus quos
                repellat tempora velit, veniam!
            </div>

        </div>
    );
};

export default Project;
