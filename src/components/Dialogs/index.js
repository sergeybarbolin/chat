import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, Empty } from 'antd';

import { DialogItem } from './../';
import { dialogsActions } from './../../redux/actions';
import './Dialogs.scss';

const { Search } = Input;
const Dialogs = (props) => {
    const { fetchDialogs, setCurrentDialog, items, userId } = props;
    const [foundDialogs, setFoundDialogs] = useState(items);
    const searchDialogs = value => {
        const results = items.filter(item => {
            const userName = item.user.fullName.toUpperCase();

            return userName.includes(value.toUpperCase())
        })

        setFoundDialogs(results);
    }

    useEffect(() => {
        if (!items.length) {
            fetchDialogs();
        } else {
            setFoundDialogs(items);
        }
    }, [items, fetchDialogs]);
    
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
                [...foundDialogs].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .map( item => (
                    <DialogItem key={ item._id } onSelect={setCurrentDialog} userId={userId} {...item} />
                )) 
                : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Диалоги не найдены'} />
            }
        </div>
    );
}



export default connect(
    ({ dialogs }) => dialogs, 
    dialogsActions
)(Dialogs);