import React from 'react';
import classNames from 'classnames';
import generateAvatarFromHash from './../../utils/helpers/generateAvatarFromHash';
import './Avatar.scss';

const Avatar = ({ user}) => {
    const { _id, avatar, fullName, isOnline } = user;

    if (avatar) {
        
        return (
            <div className="user-avatar">
                <img 
                    src={ avatar } 
                    alt={ 'avatar' + fullName }
                    />
            </div>
        );
    } else {
        const {color, colorLightn} = generateAvatarFromHash(_id);

        return (
            <div 
                className={classNames('user-avatar', { 'user-avatar--online': isOnline })} 
                style={{ backgroundImage: `linear-gradient(135deg, ${color}, ${colorLightn})` }}
            >
                <span className="user-avatar__no-img">{ fullName[0].toUpperCase() }</span>
            </div>
        )
    }
}

export default Avatar
