import React from 'react';
import Skill from "./Skills/Skill";
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
import Fade from "react-reveal/Fade";


const AboutMe = () => {
    return (
        <div className={s.container}>
            <Title title={'skills'}/>
            <Fade>
                <div className={s.skills}>
                    <Skill title={'HTML&CSS'} icon={HC}/>
                    <Skill title={'JavaScript'} icon={js}/>
                    <Skill title={'TypeScript'} icon={ts}/>
                    <Skill title={'React'} icon={react}/>
                    <Skill title={'Redux'} icon={redux}/>
                    <Skill title={'Axios'} icon={axios}/>
                    <Skill title={'Git'} icon={git}/>
                    <Skill title={'Jest'} icon={jest}/>
                    <Skill title={'Storybook'} icon={sb}/>
                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;
