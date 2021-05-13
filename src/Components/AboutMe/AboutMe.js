import React from 'react';
import Skills from "./Skills/Skills";
import s from './AboutMe.module.css'
import Title from "../../common/Components/Title/Title";

const AboutMe = () => {
    return (
        <div className={s.container}>
            <Title title={'skills'}/>
            <div className={s.skills}>
                <Skills/>
                <Skills/>
                <Skills/>
            </div>
        </div>
    );
};

export default AboutMe;
