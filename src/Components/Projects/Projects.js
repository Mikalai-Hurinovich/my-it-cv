import React from "react";
import s from "./Projects.module.css"
import Project from "./Project/Projects";
import Title from "../../common/Components/Title/Title";
import todoImage from './../../assets/img/Projects/TodoList.png'
import SnImage from './../../assets/img/Projects/Social-Networking-Network.jpg'
import covidDashboard from './../../assets/img/Projects/covid.png'


const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${SnImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };
    const covid = {
        backgroundImage: `url(${covidDashboard})`,
    };
    return (
        <div className={s.projects}>
            <Title title={'my projects'}/>
            <div className={s.project__items}>
                <Project title={'Social Network'} style={socialNetwork}/>
                <Project title={'TodoList'} style={todoList}/>
                <Project title={'Covid Dashboard'} style={covid}/>
            </div>
        </div>
    );
};

export default Projects;
