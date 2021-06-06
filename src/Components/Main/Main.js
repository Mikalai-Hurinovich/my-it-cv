import React from 'react';
import s from './Main.module.scss'
import profilePhoto from './../../assets/img/personal/profilePhoto.png'
import Button from "../../common/Components/Button/Button";
import Particles from 'react-particles-js';

const params = {
    "number": {
        "value": 400,
        "density": {
            "enable": true,
            "value_area": 800
        }
    },
    "color": {
        "value": '#D55448'
    },
    "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 5
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
    },
    "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
    },
    "size": {
        "value": 2,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
    },
    "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#D55448",
        "opacity": 0.4,
        "width": 1
    },
    "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 300,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
}

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <Particles className={s.particles} params={params}/>
            <div className={s.container}>
                <div className={s.mainBlock__photo}>
                    <img className={s.profilePhoto} src={profilePhoto} alt="profilePhoto"/>
                </div>
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
            </div>

        </div>
    );
};

export default Main;
