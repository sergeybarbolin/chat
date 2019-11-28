import React from 'react';
import { Message } from './../../components';

import './Home.scss';

const Home = () => (
    <section className="home">
        <Message 
            avatar="https://zolotoy.ru/wp-content/uploads/2019/10/Ntv8QRMb-Wo-e1571144474635-254x300.jpg"
            text="Hello!"
            date="Thu Nov 28 2019 10:19:12 GMT+0300"
        />
    </section>
);

export default Home;