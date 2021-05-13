import React from 'react';
import s from './RemoteWork.module.css'
import Title from "../../common/Components/Title/Title";

const RemoteWork = () => {
    return (
        <div className={s.container}>
            <Title title={'I\'m available for Freelance'}/>
            <button>Hire me!</button>
        </div>
    );
};

export default RemoteWork;
