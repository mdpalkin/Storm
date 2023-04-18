import React from "react"
import s from "./Dialogs.module.css"
import DialogItem, {DialogItemType} from "./Dialog/DialogItem";
import Message, {MessageType} from "./Message/Message";

type DialogsType = {
    state: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessageType>
    }
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem icon={d.icon} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message sender={m.sender} message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={s.sender}>
                    <textarea ref={newMessageElement} className={s.message_area} placeholder={"Type message..."}></textarea>
                    <button onClick={sendMessage} className={s.btn_send}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;