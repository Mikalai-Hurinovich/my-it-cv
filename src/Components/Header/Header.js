import React from 'react';
import s from './Header.module.scss'
import {Link} from "react-scroll"

const Header = () => {
    return (
        <header id="header" className={s.header}>
            <div className={s.container}>
                <input className={s.navSwitcher} id={'navToggle'} type='checkbox'/>
                <label className={s.navToggle} htmlFor="navToggle"></label>
                <nav className={s.nav} id="nav">
                    <ul className={s.nav__items}>
                        <li>
                            <Link activeClass={s.nav__link} to={'main'} spy={true} smooth={true}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link activeClass={s.nav__link} to={'skills'} spy={true} smooth={true}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link activeClass={s.nav__link} to={'projects'} spy={true} smooth={true}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link activeClass={s.nav__link} to={'contacts'} spy={true} smooth={true}>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
