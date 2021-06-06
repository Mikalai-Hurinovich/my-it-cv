import React from 'react';
import s from './Contacts.module.scss'
import Title from "../../common/Components/Title/Title";

const Contacts = () => {
    return (
        <div className={s.container}>
            <Title title={'my contacts'}/>
            <form className={s.form}>
                <input className={s.input} type="text" placeholder={'Name'}/>
                <input className={s.input} type="text" placeholder={'E-mail'}/>
                <textarea className={s.textarea} placeholder={'Your message here...'}></textarea>
                <button className={s.formButton} type={"submit"} title={'Send'}><span>Submit</span></button>
            </form>
        </div>
    );
};

export default Contacts;
