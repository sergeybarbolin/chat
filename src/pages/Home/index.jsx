import React from 'react';
import { Dialogs, ChatInput, Messages } from './../../components';
import { Icon } from 'antd';
import './Home.scss';

const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat-sidebar">
                <div className="chat-sidebar__header">
                    <div className="chat-sidebar__title">
                        <Icon type="team" />
                        <span>Список контактов</span>
                    </div>
                    <button className="chat__button-control">
                        <Icon type="form" />
                    </button>
                </div>

                <Dialogs
                    userId={1}
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
            </div>
            <div className="chat-dialog">
                <div className="chat-dialog__header">
                    <div className="chat-dialog__user-info">
                        <p className="chat-dialog__user-name">Фёдор Достаевский</p>
                        <p className="chat-dialog__status">Online</p>
                    </div>
                    <button className="chat__button-control">
                        <Icon type="more" />
                    </button>
                </div>
                <div className="chat-dialog__body">
                    <Messages items={[{}]} />
                </div>
                <div className="chat-dialog__footer">
                    <ChatInput />
                </div>
            </div>
        </div>



    </section>
);

export default Home;