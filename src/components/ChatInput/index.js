import React, { useState } from 'react'
import { SmileOutlined, PaperClipOutlined, SendOutlined, AudioOutlined} from '@ant-design/icons';

import './ChatInput.scss';

const ChatInput = props => {
    const [value, setValue] = useState('');

    return (
        <div className="chat-input">
            <button className="chat-input__btn"><SmileOutlined /></button>
            <input 
                className="chat-input__text" 
                placeholder="Сообщение..."
                onChange={ e => setValue(e.target.value) }
            />
            <button className="chat-input__btn"><PaperClipOutlined /></button>
            
            { 
                value ? <button className="chat-input__btn"><SendOutlined /></button>
                    : <button className="chat-input__btn"><AudioOutlined /></button>
            }
        </div>
    );
}

export default ChatInput
