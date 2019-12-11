import React from 'react'
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames';

import './Message.scss';
import readedSvg from './../../assets/img/readed.svg';
import noReadedSvg from './../../assets/img/noreaded.svg';

const Message = ({ avatar, user, text, date, isMe, readed, attachments }) => (
    <div className={ classNames('message', { "message--isme": isMe })}>
        <div className="message__avatar">
            <img src={avatar} alt={user.fullname} />
        </div>
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            { attachments && 
                <div className="message__attachments">
                    {
                        attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt="" />
                            </div>
                        ))
                    }
                </div> 
            }
            <div className="message__info">
                { isMe && <img className="message__status" src={ readed ? readedSvg : noReadedSvg  } alt="message-status" /> }
                <span className="message__date">
                    { formatDistanceToNow(new Date( date ), 
                        {
                            addSuffix: true,
                            locale: ruLocale
                        }
                    )}
                </span>
            </div>
        </div>
    </div>
)

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isMe: PropTypes.bool,
    readed: PropTypes.bool
}

export default Message
