import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';

import { Time, IconReadStatus, Audio } from './../';

const Message = ({ 
    avatar, 
    user, 
    text, 
    date, 
    isMe, 
    readed, 
    attachments,
    audio,
    isTyping
}) => (
    <div className={ classNames('message', { 
            "message--isme": isMe,
            "message--istyping": isTyping,
            "message--isaudio": !! audio
        })}
    >
        <div className="message__avatar user-avatar">
            <img src={avatar} alt={user.fullname} />
        </div>
        <div className="message__content">
            {
                ( text || isTyping ) &&
                <div className="message__bubble">
                    { text && <p className="message__text">{text}</p> }
                    { isTyping && <div className="message__typing">Печатает...</div> } 
                </div>
            }
            { 
                attachments && 
                <div className="message__attachments">
                    {
                        attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))
                    }
                </div> 
            }{
                audio && 
                    <div className="message__bubble">
                        <Audio audioSrc={audio} />
                    </div>
            }
            <div className="message__info">
                { 
                    isMe && 
                    <IconReadStatus readed={readed} />
                }

                {
                    date &&
                    <p className="message__date">
                        <Time date={ date } />
                    </p>
                }
            </div>
        </div>
    </div>
)


// const Message = ({ 
//     avatar, 
//     user, 
//     text, 
//     date, 
//     isMe, 
//     readed, 
//     attachments,
//     isTyping
// }) => (
//     <div className={ classNames('message', { 
//             "message--isme": isMe,
//             "message--istyping": isTyping
//         })}
//     >
//         <div className="message__avatar">
//             <img src={avatar} alt={user.fullname} />
//         </div>
//         <div className="message__content">
//             {
//                 ( text || isTyping ) &&
//                 <div className="message__bubble">
//                     { text && <p className="message__text">{text}</p> }
//                     { isTyping && <div className="message__typing">Печатает...</div> } 
//                 </div>
//             }
//             { 
//                 attachments && 
//                 <div className="message__attachments">
//                     {
//                         attachments.map(item => (
//                             <div className="message__attachments-item">
//                                 <img src={item.url} alt={item.filename} />
//                             </div>
//                         ))
//                     }
//                 </div> 
//             }
//             <div className="message__info">
//                 { 
//                     isMe && 
//                     <IconReadStatus readed={readed} />
//                 }

//                 {
//                     date &&
//                     <p className="message__date">
//                         <Time date={new Date( date )} />
//                     </p>
//                 }
//             </div>
//         </div>
//     </div>
// )

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    audio: PropTypes.string,
    isMe: PropTypes.bool,
    readed: PropTypes.bool,
    isTyping: PropTypes.bool
}

export default Message
