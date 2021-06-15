import React, {useState} from 'react';
import s from './Contacts.module.scss'
import Title from "../../common/Components/Title/Title";
import Particles from "react-particles-js";
import {params} from "../Main/Main";
import Fade from "react-reveal/Fade";
import emailjs from 'emailjs-com';
import Modal from "../../common/Components/Modal/Modal";

const Contacts = () => {
    let [modalActive, setModalActive] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'templateID', e.target, 'user_CDsquY5xRMwqej5QzlI0I')
            .then(() => {
                setModalActive(true);
            }, (error) => {
                console.log(error)
            })
            .finally(() => {
                setTimeout(() => setModalActive(false), 4000)
            })
        e.target.reset()
    }

    return (
        <>
            <div className={s.container} id={'contacts'}>
                <Particles className={s.particles} params={params}/>
                <Title title={'my contacts'}/>
                <Fade>
                    <form className={s.form} onSubmit={sendEmail}>
                        <input className={s.input} type="text" placeholder={'Name'} name={'name'} required/>
                        <input className={s.input} type="text" placeholder={'E-mail'} name={'email'} required/>
                        <textarea className={s.textarea} placeholder={'Your message here...'}
                                  name={'message'} required></textarea>
                        <button className={s.formButton} type={"submit"} title={'Send'}>
                            <a>Submit</a>
                        </button>
                    </form>
                </Fade>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Your message was successfully sent. Thanks!</p>
            </Modal>
        </>
    );
};

export default Contacts;
