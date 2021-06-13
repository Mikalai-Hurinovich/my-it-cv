import React from 'react';
import s from './Project.module.scss'
import Button from "../../../common/Components/Button/Button";
import Fade from "react-reveal/Fade";

const Project = (props) => {
    return (
        <Fade>
            <div className={s.projectCard}>
                <div className={s.projectImg} style={props.style}>
                    <Button className={s.projectButton} title={'Show'} link={props.link}/>
                </div>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <div className={s.projectTechnologies}>Technologies: {props.technologies}</div>
                <div className={s.projectDescription}>{props.description}
                </div>
            </div>
        </Fade>
    );
};

export default Project;
