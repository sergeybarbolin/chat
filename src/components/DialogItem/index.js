import React from 'react';
import classNames from 'classnames';
import './DialogItem.scss';

import { IconReadStatus } from './..';

const DialogItem = ({ user, lastMessage, unreaded, isMe }) => {
    const {fullName, isOnline, avatar} = user;

    return (
        <div className={classNames( 'dialog-item', { 'dialog-item--online': isOnline } )}>
            <div className="dialog-item__avatar">
                <img 
                    className="dialog-item__avatar-img" 
                    src={ avatar } 
                    alt={ fullName + ' avatar' }
                />
            </div>

            <div className="dialog-item__info">
            <span className="dialog-item__user-fullname">{ fullName }</span>
                <br/>
                <span className="dialog-item__message-text">{ lastMessage }</span>
            </div>

            <div className="dialog-item__status">
                <time className="dialog-item__time">13:10</time>
                { isMe && <IconReadStatus className="dialog-item__readed-status" readed={true} /> }
                { !isMe && unreaded && <span className="count-messages">{ unreaded }</span> }
            </div>
        </div>
    );
}

export default DialogItem;
