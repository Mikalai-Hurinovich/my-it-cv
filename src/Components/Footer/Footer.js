import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <h2 className={s.footer__title}>Hurinovich Mikalai</h2>
            <div className={s.footer__block}>Какая-то дичь</div>
            <div className={s.footer__rights}>
                © 2021 Mikalai Hurinovich.
            </div>
        </div>
    );
};

export default Footer;
