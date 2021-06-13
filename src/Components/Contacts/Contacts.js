import React from 'react';
import s from './Contacts.module.scss'
import Title from "../../common/Components/Title/Title";
import Particles from "react-particles-js";
import {params} from "../Main/Main";
import Fade from "react-reveal/Fade";

const Contacts = () => {
    return (
        <div className={s.container} id={'contacts'}>
            <Particles className={s.particles} params={params}/>
            <Title title={'my contacts'}/>
            <Fade>
                <form className={s.form}>
                    <input className={s.input} type="text" placeholder={'Name'}/>
                    <input className={s.input} type="text" placeholder={'E-mail'}/>
                    <textarea className={s.textarea} placeholder={'Your message here...'}></textarea>
                    <button className={s.formButton} type={"submit"} title={'Send'}>
                        <a>Submit</a>
                    </button>
                </form>
            </Fade>
        </div>
    );
};

export default Contacts;
