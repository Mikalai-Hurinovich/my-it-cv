import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>

            <div className={s.container}>
                <div className={s.mainBlock__text}>
                    <span>Hi There</span>
                    <h1>I am Mikalai Hurynovich</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.mainBlock__photo}></div>
            </div>
        </div>
    );
};

export default Main;
