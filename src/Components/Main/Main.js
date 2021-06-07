import React from 'react';
import s from './Main.module.scss'
import profilePhoto from './../../assets/img/personal/profilePhoto.png'
import Button from "../../common/Components/Button/Button";
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import Reveal from "react-reveal/Reveal";

export const params = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "random",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 1
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <Particles className={s.particles} params={params}/>

            <div className={s.container}>
                <Fade top>
                    <div className={s.mainBlock__photo}>
                        <img className={s.profilePhoto} src={profilePhoto} alt="profilePhoto"/>
                    </div>
                </Fade>
                <Fade>
                    <div className={s.mainBlock__text}>
                        <span>Hi,</span>
                        <h1>I am Mikalai Hurynovich,</h1>
                        <p>Frontend Developer</p>
                    </div>
                    <div className={s.location}>based in Minsk, Belarus</div>
                    <div className={s.button}>
                        <Button title={'About Me'}></Button>
                    </div>
                    <div className={s.scrollDown}>
                        <div className={s.chevrons}>
                            <div className={s.chevronDown}></div>
                            <div className={s.chevronDown}></div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Main;
