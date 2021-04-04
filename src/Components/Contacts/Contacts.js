import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.container}>
            <h2>MY CONTACTS</h2>
            <div className={s.form}>
                <input className={s.input} type="text"/>
                <input className={s.input} type="text"/>
                <textarea className={s.textarea} placeholder={'Some text here...'}></textarea>
                <a href="#">GitHub</a>
                <a href="#">Telegram</a>
            </div>
            <button>Send</button>
        </div>
    );
};

export default Contacts;
