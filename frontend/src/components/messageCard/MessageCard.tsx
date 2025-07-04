import {MessageDTO} from "../../redux/message/MessageModel";
import {UserDTO} from "../../redux/auth/AuthModel";
import styles from './MessageCard.module.scss';
import {Chip} from "@mui/material";
import React from "react";
import {getDateFormat} from "../utils/Utils";

interface MessageCardProps {
    message: MessageDTO;
    reqUser: UserDTO | null;
    isNewDate: boolean;
    isGroup: boolean;
}

const MessageCard = (props: MessageCardProps) => {

    const isOwnMessage = props.message.user.id === props.reqUser?.id;
    const date: Date = new Date(props.message.timeStamp);
    const hours = date.getHours() > 9 ? date.getHours().toString() : "0" + date.getHours();
    const minutes = date.getMinutes() > 9 ? date.getMinutes().toString() : "0" + date.getMinutes();
    const label: React.ReactElement = (
        <div className={styles.bubbleContainer}>
            {props.isGroup && !isOwnMessage && <h4 className={styles.contentContainer}>{props.message.user.fullName}:</h4>}
            <div className={styles.bubbleRow}>
                <span className={styles.contentContainer}>{props.message.content}</span>
                <span className={styles.timeContainer}>{hours + ":" + minutes}</span>
            </div>
        </div>
    );

    const dateLabel: React.ReactElement = (
      <p>{getDateFormat(date)}</p>
    );

    return (
        <div className={styles.messageCardInnerContainer}>
            {props.isNewDate && <div className={styles.date}>{<Chip label={dateLabel}
                                                                    sx={{height: 'auto', width: 'auto', backgroundColor: 'rgba(0,234,255,0.10)', color: '#00eaff', fontWeight: 700}}/>}</div>}
            <div className={isOwnMessage ? styles.ownMessage : styles.othersMessage}>
                <Chip label={label}
                      sx={{
                        height: 'auto',
                        width: 'auto',
                        backgroundColor: isOwnMessage ? 'rgba(0,234,255,0.18)' : 'rgba(24,28,36,0.92)',
                        color: isOwnMessage ? '#00eaff' : '#fff',
                        ml: '0.75rem',
                        boxShadow: isOwnMessage ? '0 2px 8px 0 rgba(0,234,255,0.18)' : '0 2px 8px 0 rgba(0,0,0,0.18)',
                        borderRadius: '16px',
                        border: isOwnMessage ? '1.5px solid #00eaff' : '1.5px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(4px)'
                      }}
                />
            </div>
        </div>
    );
};

export default MessageCard;