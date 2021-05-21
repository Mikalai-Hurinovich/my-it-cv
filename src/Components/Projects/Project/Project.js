import React from 'react';
import s from './Project.module.scss'
import Button from "../../../common/Components/Button/Button";

const Project = (props) => {
    return (
        <div className={s.project__card}>
            <div className={s.project__img} style={props.style}>
                <Button title={'Show'}/>
            </div>
            <h3 className={s.project__title}>{props.title}</h3>
            <div>Technologies: {props.technologies}</div>
            <div className={s.project__description}>{props.description}
            </div>

        </div>
    );
};

export default Project;
