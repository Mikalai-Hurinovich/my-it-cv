import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header id="header" className={s.header}>
            <div className={s.container}>
                <input className={s.navSwitcher} id={'navToggle'} type='checkbox'/>
                <label className={s.navToggle} htmlFor="navToggle"></label>
                <nav className={s.nav} id="nav">
                    <ul className={s.nav__items}>
                        <li><a className={s.nav__link} href="/" data-scroll="#about">About Me</a></li>
                        <li><a className={s.nav__link} href="/" data-scroll="#service">Skills</a></li>
                        <li><a className={s.nav__link} href="/" data-scroll="#work">Projects</a></li>
                        <li><a className={s.nav__link} href="/" data-scroll="#footer">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
