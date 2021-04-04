import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header id="header" className={s.header}>
            <div className={s.container}>
                <div className="header__logo" data-scroll="#intro">MyCV</div>
                <nav className={s.nav} id="nav">
                    <a className={s.nav__link} href="#" data-scroll="#about">About Me</a>
                    <a className={s.nav__link} href="#" data-scroll="#service">Skills</a>
                    <a className={s.nav__link} href="#" data-scroll="#work">Projects</a>
                    <a className={s.nav__link} href="#" data-scroll="#footer">Contacts</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
