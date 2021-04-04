import React from 'react';
import s from './Projects.module.css'
import Project from "./Project/Projects";

const Projects = () => {
    return (
        <div className={s.projects}>
            <h3 className={s.project__title}>My Projects</h3>
            <div className={s.projects__item}>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};

export default Projects;
