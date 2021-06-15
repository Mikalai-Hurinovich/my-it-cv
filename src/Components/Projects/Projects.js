import React from "react";
import s from "./Projects.module.scss"
import Project from "./Project/Project";
import Title from "../../common/Components/Title/Title";
import todoImage from '../../assets/img/projects/TodoList.png'
import SnImage from '../../assets/img/projects/Social-Networking-Network.jpg'
import covidDashboard from '../../assets/img/projects/covid.png'
import cozyHouse from '../../assets/img/projects/shelter.png'
import Particles from "react-particles-js";
import {params} from "../Main/Main";
import Fade from "react-reveal/Fade";

const Projects = () => {
    let shelter = {
        backgroundImage: `url(${cozyHouse})`,
    };
    let socialNetwork = {
        backgroundImage: `url(${SnImage})`,
    };
    let todoList = {
        backgroundImage: `url(${todoImage})`,
    };
    let covid = {
        backgroundImage: `url(${covidDashboard})`,
    };

    return (
        <div className={s.projects} id={'projects'}>
            <Particles className={s.particles} params={params}/>
            <Fade>
                <Title title={'my projects'}/>
                <div className={s.project__items}>
                    <Project title={'Social Network'} style={socialNetwork}
                             technologies={'React/Redux/TypeScript/ReduxForm/Axios'}
                             description={'Social network. Invite friends. Communicate.'}
                             link={'https://mikalai-hurinovich.github.io/My-Social-Network/'}/>
                    <Project title={'Covid Dashboard'} style={covid} technologies={'HTML/CSS/JavaScript'}
                             description={'Covid dashboard, schedule of covid cases, deaths, recovered.'}
                             link={'https://rolling-scopes-school.github.io/mikalai-hurinovich-JS2020Q3/covid-dashboard/'}/>
                    <Project title={'TodoList'} style={todoList} technologies={'React/Redux/TypeScript/Axios'}
                             description={'Simple Todolist project.'}
                             link={'https://mikalai-hurinovich.github.io/ToDoList'}/>
                    <Project title={'Cozy House'} style={shelter} technologies={'HTML/CSS/JavaScript'}
                             description={'Shelter "Cozy House", where pets are looking for a new home.'}
                             link={'https://rolling-scopes-school.github.io/mikalai-hurinovich-JS2020Q3/shelter/pages/main/index.html'}/>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;
