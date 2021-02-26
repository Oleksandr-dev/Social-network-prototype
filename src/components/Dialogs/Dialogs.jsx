import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }


    let dialogElement = props.dialogsData.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)

    let messageElement = props.dialogsData.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={style.chats}>
            <div className={style.chatItems}>
                {dialogElement}
            </div>
            <div>
                <div className={style.messages}>
                    {messageElement}
                </div>
                <div className={style.sendMSG}>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;