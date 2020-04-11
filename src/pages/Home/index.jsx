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

                <Dialogs userId={1} />
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