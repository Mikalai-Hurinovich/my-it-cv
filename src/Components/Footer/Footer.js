import React from 'react';
import s from './Footer.module.scss'
import github from "../../assets/img/icons/contacts/github.svg";
import telegram from "../../assets/img/icons/contacts/telegram.png";
import cw from "../../assets/img/icons/contacts/cw.svg";
import li from "../../assets/img/icons/contacts/linkedin.png";

const Footer = () => {
    return (
        <div className={s.footer}>
            <h2 className={s.footer__title}>Hurinovich Mikalai</h2>
            <div className={s.footer__contacts}>
                <a target="_blank" href="https://github.com/Mikalai-Hurinovich">
                    <img src={github} alt="githubImg"/>
                </a>
                <a target="_blank" href="https://t.me/NikolaTeslavich">
                    <img src={telegram} alt="telegramImg"/>
                </a>
                <a target="_blank" href="https://www.codewars.com/users/Nikolajchik">
                    <img src={cw} alt="codeWarsImg"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/mikalaihurynovich-6b69a71a3/">
                    <img src={li} alt="linkedInImg"/>
                </a>
            </div>
            <div className={s.footer__rights}>
                © 2021 Mikalai Hurinovich.
            </div>
        </div>
    );
};

export default Footer;
