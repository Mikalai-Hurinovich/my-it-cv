import React from 'react';
import s from './Project.module.scss'
import Button from "../../../common/Components/Button/Button";

const Project = (props) => {
    return (
        <div className={s.project__card}>
            <div className={s.project__img} style={props.style}>
                <Button title={'Show'}/>
                {/*<button className={s.project__card_button}>Show</button>*/}
            </div>
            <h3 className={s.project__title}>{props.title}</h3>
            <div className={s.project__description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                cum
                eius enim explicabo minus quos
                repellat tempora velit, veniam!
            </div>

        </div>
    );
};

export default Project;
