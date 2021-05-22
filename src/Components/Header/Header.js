import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header id="header" className={s.header}>
            <div className={s.container}>
                <input className={s.navSwitcher} id={'navToggle'} type='checkbox'/>
                <label className={s.navToggle} htmlFor="navToggle"></label>
                <nav className={s.nav} id="nav">
                    <a className={s.nav__link} href="/" data-scroll="#about">About Me</a>
                    <a className={s.nav__link} href="/" data-scroll="#service">Skills</a>
                    <a className={s.nav__link} href="/" data-scroll="#work">Projects</a>
                    <a className={s.nav__link} href="/" data-scroll="#footer">Contacts</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
