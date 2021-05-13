import React from 'react';
import Skills from "./Skills/Skills";
import s from './AboutMe.module.css'
import Title from "../../common/Components/Title/Title";

const AboutMe = () => {
    return (
        <div className={s.container}>
            <Title title={'skills'}/>
            <div className={s.skills}>
                <Skills title={'JavaScript'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, tempora?'}/>
                <Skills title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                ' Consequuntur, tempora?'}/>
                <Skills title={'HTML & CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                ' Consequuntur, tempora?'}/>
                <Skills title={'HTML & CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                ' Consequuntur, tempora?'}/>
                <Skills title={'HTML & CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                        ' Consequuntur, tempora?'}/>
                <Skills title={'HTML & CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                        ' Consequuntur, tempora?'}/>
            </div>
        </div>
    );
};

export default AboutMe;
