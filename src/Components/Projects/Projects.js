import React from "react";
import s from "./Projects.module.scss"
import Project from "./Project/Project";
import Title from "../../common/Components/Title/Title";
import todoImage from '../../assets/img/projects/TodoList.png'
import SnImage from '../../assets/img/projects/Social-Networking-Network.jpg'
import covidDashboard from '../../assets/img/projects/covid.png'
import cozyHouse from '../../assets/img/projects/shelter.png'


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
        <div className={s.projects}>
            <Title title={'my projects'}/>
            <div className={s.project__items}>
                <Project title={'Social Network'} style={socialNetwork}
                         technologies={'React/Redux/TypeScript/ReduxForm/Axios'}
                         description={'Social network. Invite friends. Communicate.'}/>
                <Project title={'Covid Dashboard'} style={covid} technologies={'HTML/CSS/JavaScript'}
                         description={'Covid dashboard, schedule of covid cases, deaths, recovered.'}/>
                <Project title={'TodoList'} style={todoList} technologies={'React/Redux/TypeScript/Axios'}
                         description={'Simple Todolist project.'}/>
                <Project title={'Cozy House'} style={shelter} technologies={'HTML/CSS/JavaScript'}
                         description={'Shelter "Cozy House", where pets are looking for a new home.'}/>
            </div>
        </div>
    );
};

export default Projects;
