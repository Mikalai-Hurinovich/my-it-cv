import React from 'react';
import s from './RemoteWork.module.scss'
import Title from "../../common/Components/Title/Title";
import Button from "../../common/Components/Button/Button";
import Fade from "react-reveal/Fade";

const RemoteWork = () => {
    return (
        <Fade>
            <div className={s.container}>
                <Title title={'I\'m available for Freelance'}/>
                <Button title={'Hire me!'} link={'https://t.me/NikolaTeslavich'}/>
            </div>
        </Fade>
    );
};

export default RemoteWork;
