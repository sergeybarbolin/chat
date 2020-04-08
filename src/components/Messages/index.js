import React from 'react'
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from './../';

const Messages = ({ items }) => (
    items && items.length ? 
        <div className="messages">
            <Message 
                avatar="https://zolotoy.ru/wp-content/uploads/2019/10/Ntv8QRMb-Wo-e1571144474635-254x300.jpg"
                audio="https://notificationsounds.com/soundfiles/cee631121c2ec9232f3a2f028ad5c89b/file-oringz-beautiful-christmas-tune.mp3"
                date="Thu Nov 28 2019 10:19:12"
                isMe={false}
            />
            <Message 
                avatar="https://zolotoy.ru/wp-content/uploads/2019/10/DSCF6760-e1571049298553-278x300.jpg"
                text="Enim id occaecat reprehenderit proident."
                date="Thu Dec 11 2019 15:32:12"
                isMe={true}
                readed={true}
                attachments={[
                    { url: 'https://source.unsplash.com/500x500/?random=1' },
                    { url: 'https://source.unsplash.com/900x600/?random=2' },
                    { url: 'https://source.unsplash.com/600x900/?random=3' },
                    { url: 'https://source.unsplash.com/500x500/?random=4' },

                ]}
            />
            <Message 
                avatar="https://zolotoy.ru/wp-content/uploads/2019/10/Ntv8QRMb-Wo-e1571144474635-254x300.jpg"
                date="Thu Dec 14 2019 11:32:12"
                isMe={false}
                attachments={[
                    { url: 'https://source.unsplash.com/600x900/?random=51' },
                ]}
            />
            <Message 
                avatar="https://zolotoy.ru/wp-content/uploads/2019/10/Ntv8QRMb-Wo-e1571144474635-254x300.jpg"
                isTyping
            />
        </div>
        : <Empty description={'Выберите диалог чтобы начать общение'} />
)

Messages.propTypes = {
    messages: PropTypes.array,
}

export default Messages
