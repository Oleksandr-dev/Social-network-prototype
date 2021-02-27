import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        let text = newMessageElement.current.value
        const action ={
            type: 'ADD-MESSAGE',
        }
        props.dispatch(action)
        console.log(text)
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value
        const action ={
            type: 'ADD-MESSAGE',
            newText: text,
        }
        props.dispatch(action)
        console.log(text)
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
                        <textarea ref={newMessageElement}
                                  value={props.dialogsData.newMessageText}
                                  onChange={onMessageChange}/>
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