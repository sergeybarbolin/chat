import React from 'react';
import classNames from 'classnames';
import { format, isToday, isThisWeek, isThisYear } from 'date-fns';
import { IconReadStatus, Avatar } from './..';
import './DialogItem.scss';

const getMessageTime = created_at => {
    let formatDate = null;
    let date = new Date(created_at);

    if (isToday(date)) {
        formatDate = format(date, 'HH:mm');
    } else if (isThisWeek(date)) {
        formatDate = format(date, 'eee');
    } else if (isThisYear(date)) {
        formatDate = format(date, 'dd.MM');
    } else {
        formatDate = format(date, 'dd.MM.yyyy');
    }

    return formatDate;
};

const DialogItem = ({ _id, user, text, created_at, unreaded, userId, onSelect }) => {
    const {fullName, isOnline,} = user;
    const isMe = user._id === userId;

    return (
        <div 
            className={classNames( 'dialog-item', { 'dialog-item--online': isOnline } )}
            onClick={onSelect.bind(this, _id)}
        >
            <div className="dialog-item__avatar">
                <Avatar className="dialog-item__avatar" user={user} />
            </div>

            <div className="dialog-item__info">
            <span className="dialog-item__user-fullname">{ fullName }</span>
                <br/>
                <span className="dialog-item__message-text">{  text }</span>
            </div>

            <div className="dialog-item__status">
                <time className="dialog-item__time">{ getMessageTime(  new Date(created_at) ) }</time>
                { isMe && <IconReadStatus className="dialog-item__readed-status" readed={true} /> }
                { !isMe && !!unreaded && <span className="count-messages">{ unreaded }</span> }
            </div>
        </div>
    );
}

export default DialogItem;
