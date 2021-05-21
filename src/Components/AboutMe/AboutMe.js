import React from 'react';
import Skills from "./Skills/Skills";
import s from './AboutMe.module.scss'
import Title from "../../common/Components/Title/Title";
import js from '../../assets/img/icons/aboutMe/javascript.svg.png'
import react from '../../assets/img/icons/aboutMe/react.png'
import redux from '../../assets/img/icons/aboutMe/redux.png'
import git from '../../assets/img/icons/aboutMe/git.png'
import jest from '../../assets/img/icons/aboutMe/jest.png'
import HC from '../../assets/img/icons/aboutMe/HC.png'
import ts from '../../assets/img/icons/aboutMe/TS.jpg'
import sb from '../../assets/img/icons/aboutMe/sb.png'
import axios from '../../assets/img/icons/aboutMe/axios.png'


const AboutMe = () => {
    return (
        <div className={s.container}>
            <Title title={'skills'}/>
            <div className={s.skills}>
                <Skills icon={HC}/>
                <Skills icon={js}/>
                <Skills icon={ts}/>
                <Skills icon={react}/>
                <Skills icon={redux}/>
                <Skills icon={axios}/>
                <Skills icon={git}/>
                <Skills icon={jest}/>
                <Skills icon={sb}/>
            </div>
        </div>
    );
};

export default AboutMe;
