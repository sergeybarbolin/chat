import React, { useState } from 'react';
import { Input, Empty } from 'antd';

import { DialogItem } from './../';
import './Dialogs.scss';

const { Search } = Input;
const Dialogs = ({ items, userId }) => {
    const [foundDialogs, setFoundDialogs] = useState(items);
    const searchDialogs = value => {
        const results = items.filter(item => {
            const userName = item.user.fullName.toUpperCase();

            return userName.includes(value.toUpperCase())
        })

        setFoundDialogs(results);
    }
    
    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Search
                    placeholder="Поиск среди контактов"
                    onSearch={value => searchDialogs(value)}
                    onChange={e => searchDialogs(e.target.value)}
                />
            </div>
            { 
            foundDialogs.length ?
                [...foundDialogs].sort((a, b) => b.created_at - a.created_at)
                .map( item => (
                    <DialogItem key={ item._id } userId={userId} {...item} />
                )) 
                : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Диалоги не найдены'} />
            }
        </div>
    );
}



export default Dialogs;
