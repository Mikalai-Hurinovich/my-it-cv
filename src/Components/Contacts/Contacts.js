import React from 'react';
import s from './Contacts.module.css'
import github from './../../assets/img/github.png'
import telegram from './../../assets/img/telegram.png'

const Contacts = () => {
    return (
        <div className={s.container}>
            <h2>MY CONTACTS</h2>
            <div className={s.form}>
                <input className={s.input} type="text"/>
                <input className={s.input} type="text"/>
                <textarea className={s.textarea} placeholder={'Some text here...'}></textarea>
                <div className={s.form__contacts}>
                    <a target="_blank" href="https://github.com/Mikalai-Hurinovich">
                        <img src={github} alt="githubImg"/>
                    </a>
                    <a target="_blank" href="https://t.me/NikolaTeslavich">
                        <img src={telegram} alt="telegramImg"/>
                    </a>
                </div>
            </div>
            <button className={s.send}>Send</button>
        </div>
    );
};

export default Contacts;
