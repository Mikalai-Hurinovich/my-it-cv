import React from 'react';
import s from './Main.module.scss'
import profilePhoto from './../../assets/img/personal/profilePhoto.png'
import Button from "../../common/Components/Button/Button";

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.mainBlock__photo}>
                    <img className={s.profilePhoto} src={profilePhoto} alt="profilePhoto"/>
                </div>
                <div className={s.mainBlock__text}>
                    <span>Hi,</span>
                    <h1>I am Mikalai Hurynovich</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.location}>based in Minsk, Belarus</div>
                <div className={s.button}>
                    <Button title={'About Me'}></Button>
                </div>
            </div>

        </div>
    );
};

export default Main;
