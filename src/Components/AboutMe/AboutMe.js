import React from 'react';
import Skills from "./Skills/Skills";
import  s from './AboutMe.module.css'
const AboutMe = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>My Skills</h2>
            <div className={s.skills}>
                <Skills/>
                <Skills/>
                <Skills/>
            </div>
        </div>
    );
};

export default AboutMe;
