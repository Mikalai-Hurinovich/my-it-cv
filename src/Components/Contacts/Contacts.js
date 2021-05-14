import React from 'react';
import s from './Contacts.module.scss'
import Title from "../../common/Components/Title/Title";
import Button from "../../common/Components/Button/Button";

const Contacts = () => {
    return (
        <div className={s.container}>
            <Title title={'my contacts'}/>
            <form className={s.form}>
                <input className={s.input} type="text"/>
                <input className={s.input} type="text"/>
                <textarea className={s.textarea} placeholder={'Some text here...'}></textarea>
                <Button title={'Send'}/>
            </form>
        </div>
    );
};

export default Contacts;
