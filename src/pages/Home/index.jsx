import React from 'react';
import { Dialogs, Message } from './../../components';

import './Home.scss';

const Home = () => (
    <section className="home">
        <Dialogs 
            items={[
                {
                    _id: Math.random(),
                    user: {
                        _id: '02b1be0d48924c327124732726097157',
                        fullName: 'Фёдор Достаевский',
                        isOnline: true,
                        // avatar: 'https://radiovera.ru/wp-content/uploads/2013/12/dostoevsky.jpg'
                        avatar: null
                    },
                    text: "Какое-то длинное сообщение длинное сообщение длинное сообщение.",
                    created_at: new Date('2020-04-07T12:24:00'),
                    unreaded: 3,
                },
                {
                    _id: Math.random(),
                    user: {
                        _id: 1,
                        fullName: 'Роберт Де нНиро',
                        isOnline: true,
                        avatar: 'https://thumbs.dfs.ivi.ru/storage23/contents/3/1/163fb2f04e6cc23646fe80638a7c10.jpg'
                    },
                    text: "Го снимем фильм",
                    created_at: new Date('2020-03-07T12:24:00'),
                    unreaded: 1,
                }
            ]}
        />

        <Message 
            avatar="https://zolotoy.ru/wp-content/uploads/2019/10/Ntv8QRMb-Wo-e1571144474635-254x300.jpg"
            audio="https://notificationsounds.com/soundfiles/cee631121c2ec9232f3a2f028ad5c89b/file-oringz-beautiful-christmas-tune.mp3"
            date="Thu Nov 28 2019 10:19:12"
            isMe={false}
        />
        {/* <Message 
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
        /> */}
    </section>
);

export default Home;