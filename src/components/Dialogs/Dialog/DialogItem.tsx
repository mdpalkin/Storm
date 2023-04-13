import React, {FC} from "react"
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
}

const DialogItem: FC <DialogItemType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
            <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}

export default DialogItem;