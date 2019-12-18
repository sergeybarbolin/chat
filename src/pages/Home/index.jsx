import React from 'react';
import { Message } from './../../components';

import './Home.scss';

const Home = () => (
    <section className="home">
        <Message 
            avatar="https://zolotoy.ru/wp-content/uploads/2019/10/Ntv8QRMb-Wo-e1571144474635-254x300.jpg"
            text="Ex laboris deserunt tempor consequat esse reprehenderit. Anim nisi qui nisi nostrud id qui et sint ullamco irure laboris laborum amet incididunt. Eu labore exercitation cillum ullamco. Culpa nulla sint est deserunt officia adipisicing do ullamco."
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
    </section>
);

export default Home;