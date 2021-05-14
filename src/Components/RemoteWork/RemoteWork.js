import React from 'react';
import s from './RemoteWork.module.scss'
import Title from "../../common/Components/Title/Title";
import Button from "../../common/Components/Button/Button";

const RemoteWork = () => {
    return (
        <div className={s.container}>
            <Title title={'I\'m available for Freelance'}/>
            <Button title={'Hire me!'}/>
        </div>
    );
};

export default RemoteWork;
