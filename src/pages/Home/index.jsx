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
                { url: 'https://source.unsplash.com/200x200/?random=1' },
                { url: 'https://source.unsplash.com/200x200/?random=2' },
                { url: 'https://source.unsplash.com/200x200/?random=3' },
                { url: 'https://source.unsplash.com/200x200/?random=4' },
            ]}
        />
    </section>
);

export default Home;