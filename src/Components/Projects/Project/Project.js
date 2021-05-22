import React from 'react';
import s from './Project.module.scss'
import Button from "../../../common/Components/Button/Button";

const Project = (props) => {
    return (
        <div className={s.projectCard}>
            <div className={s.projectImg} style={props.style}>
                <Button className={s.projectButton} title={'Show'}/>
            </div>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <div className={s.projectTechnologies}>Technologies: {props.technologies}</div>
            <div className={s.projectDescription}>{props.description}
            </div>

        </div>
    );
};

export default Project;
