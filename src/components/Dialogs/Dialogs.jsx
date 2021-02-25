import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogsData = [
        {id:1, name:"Sasha"},
        {id:2, name:"Vitaliy"},
        {id:3, name:"Frost"},
        {id:4, name:"Andriy"},
        {id:5, name:"Kate"},
    ]

    let messagesData = [
        {id:1, message:"Hi"},
        {id:2, message:"what are you doing now?"},
        {id:3, message:"I am watching IT-kamasutra"},
    ]

    let dialogElement = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>)

    let messageElement = messagesData.map(m => <Message message={m.message} />)

    return (
        <div className={style.chats}>
            <div className={style.chatItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messageElement}
            </div>
        </div>

    )
}

export default Dialogs;