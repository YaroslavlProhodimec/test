import React from 'react'
import s from './FriendMessage.module.css'
import avatar from './avatar.png'
import {MessageType} from "../HW1";


type FriendMessagePropsType = {
    message:MessageType
}
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.Flex}>
            <div className={s.friendImageAndText}>
                <img src={avatar}
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
                    {props.message.message.time}
                </div>
                </div>
                <div className={s.fon}>
                <div className={s.friendText}>
                    <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                        {props.message.user.name}

                        {/**/}
                    </div>
                    <pre id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>

            </div>
        </div>
        </div>
    )
}

export default FriendMessage
