import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Empty, Spin } from 'antd';

import './Messages.scss';
import { Message } from './../';
import { messagesActions } from './../../redux/actions';

const Messages = (props) => {
    const { items, currentDialogId, fetchMessages, isLoading } = props;
    const messagesEl = useRef(null);

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId, fetchMessages])

    useEffect(() => {
        if (messagesEl.current && items && items.length) {
            messagesEl.current.scrollTop = messagesEl.current.scrollHeight;
        };
    })

    return (
        <div className="messages" ref={messagesEl}>
            {
                isLoading ? <Spin delay={500} />
                : items && items.length 
                        ? items.map(item =>  <Message key={item._id} {...item} />)
                        : <Empty description={'Выберите диалог чтобы начать общение'} />
                
            }
        </div>       
    )
}

Messages.propTypes = {
    messages: PropTypes.array,
}

export default connect(
    ({ messages, dialogs }) => ({ items: messages.items, isLoading: messages.isLoading, currentDialogId: dialogs.currentDialogId }), 
    messagesActions
)(Messages);