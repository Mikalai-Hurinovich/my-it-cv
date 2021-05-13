import React from 'react';
import s from './Footer.module.css'
import github from "../../assets/img/icons/github.png";
import telegram from "../../assets/img/icons/telegram.png";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__contacts}>
                <a target="_blank" href="https://github.com/Mikalai-Hurinovich">
                    <img src={github} alt="githubImg"/>
                </a>
                <a target="_blank" href="https://t.me/NikolaTeslavich">
                    <img src={telegram} alt="telegramImg"/>
                </a>
            </div>
            <h2 className={s.footer__title}>Hurinovich Mikalai</h2>
            <div className={s.footer__rights}>
                © 2021 Mikalai Hurinovich.
            </div>
        </div>
    );
};

export default Footer;
