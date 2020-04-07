import React from 'react';
import classNames from 'classnames';
import { format, isToday, isThisWeek, isThisYear } from 'date-fns';
import { IconReadStatus, Avatar } from './..';
import './DialogItem.scss';

const getMessageTime = created_at => {
    let formatDate = null;

    if (isToday(created_at)) {
        formatDate = format(created_at, 'HH:mm');
    } else if (isThisWeek(created_at)) {
        formatDate = format(created_at, 'eee');
    } else if (isThisYear(created_at)) {
        formatDate = format(created_at, 'dd.MM');
    } else {
        formatDate = format(created_at, 'dd.MM.yyyy');
    }

    return formatDate;
};

const DialogItem = ({ user, text, created_at, unreaded, userId }) => {
    const {fullName, isOnline, _id} = user;
    const isMe = _id === userId;

    return (
        <div className={classNames( 'dialog-item', { 'dialog-item--online': isOnline } )}>
            <div className="dialog-item__avatar">
                <Avatar className="dialog-item__avatar" user={user} />
            </div>

            <div className="dialog-item__info">
            <span className="dialog-item__user-fullname">{ fullName }</span>
                <br/>
                <span className="dialog-item__message-text">{  text }</span>
            </div>

            <div className="dialog-item__status">
                <time className="dialog-item__time">{ getMessageTime( created_at ) }</time>
                { isMe && <IconReadStatus className="dialog-item__readed-status" readed={true} /> }
                { !isMe && !!unreaded && <span className="count-messages">{ unreaded }</span> }
            </div>
        </div>
    );
}

export default DialogItem;
