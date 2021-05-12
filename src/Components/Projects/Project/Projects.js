import React from 'react';
import s from './Projects.module.css'

const Project = () => {
    return (
        <div className={s.project}>
            <h3 className={s.project__title}>Project Name</h3>
            <div className={s.project__wrapper}>
                <div className={s.project__preview}>
                    <button className={s.project__button}>Show</button>
                </div>
            </div>
            <div className={s.project__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum
                eius enim explicabo minus quos
                repellat tempora velit, veniam!
            </div>

        </div>
    );
};

export default Project;
