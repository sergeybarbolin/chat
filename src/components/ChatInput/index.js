import React, { useState } from 'react'
import { SmileOutlined, PaperClipOutlined, SendOutlined, AudioOutlined} from '@ant-design/icons';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';
import classNames from 'classnames';

import 'emoji-mart/css/emoji-mart.css'
import './ChatInput.scss';

const ChatInput = () => {
    const [value, setValue] = useState('');
    const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(null); 
    const toggleEmojiPicker = (bool = !visibleEmojiPicker) => {
        setVisibleEmojiPicker(bool);
    }

    return (
        <div className="chat-input">
            <div 
                className="emoji-controls"
                onMouseEnter={() => { toggleEmojiPicker(); }}
                onMouseLeave={() => { toggleEmojiPicker(); }}
            >
                { visibleEmojiPicker && <Picker set='apple' /> }
                <button className={classNames('chat-input__btn', {
                    'chat-input__btn--active': visibleEmojiPicker
                })}>
                    <SmileOutlined />
                </button>
            </div>
            <input 
                className="chat-input__text" 
                placeholder="Сообщение..."
                onChange={ e => setValue(e.target.value) }
            />
            <UploadField
                onFiles={files => { console.log(files) }}
                containerProps={{
                    className: 'chat-input__btn'
                }}
                uploadProps={{
                    accept: '.jpg,.jpeg,.png,.gif',
                }}
            >
                <button className="chat-input__btn"><PaperClipOutlined /></button>
            </UploadField>
            
            { 
                value ? <button className="chat-input__btn"><SendOutlined /></button>
                    : <button className="chat-input__btn"><AudioOutlined /></button>
            }
        </div>
    );
}

export default ChatInput
