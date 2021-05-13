import React from 'react';
import s from './Contacts.module.css'
import Title from "../../common/Components/Title/Title";

const Contacts = () => {
    return (
        <div className={s.container}>
            <Title title={'my contacts'}/>
            <form className={s.form}>
                <input className={s.input} type="text"/>
                <input className={s.input} type="text"/>
                <textarea className={s.textarea} placeholder={'Some text here...'}></textarea>
            </form>
            <button className={s.send}>Send</button>
        </div>
    );
};

export default Contacts;
