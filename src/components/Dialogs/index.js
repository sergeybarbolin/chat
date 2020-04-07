import React from 'react';
import './Dialogs.scss';

import { DialogItem } from './../';

const Dialogs = ({ items }) => (
    <div className="dialogs">
        { [...items].sort((a, b) => b.created_at - a.created_at)
        .map( item => (
            <DialogItem key={ item._id } userId={0} {...item} />
        )) }
    </div>
);

export default Dialogs;
