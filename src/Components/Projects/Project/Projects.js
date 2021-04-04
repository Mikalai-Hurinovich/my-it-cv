import React from 'react';
import s from './Projects.module.css'

const Project = () => {
    return (
        <div className={s.project}>
            <h3 className={s.project__title}>Project Name</h3>
            <div className={s.project__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae cum eius enim explicabo minus quos
                repellat tempora velit, veniam! Accusamus architecto autem eligendi est exercitationem expedita id
                libero minima nam nostrum numquam quisquam sed soluta tempore, temporibus ut vel.
            </div>

        </div>
    );
};

export default Project;
