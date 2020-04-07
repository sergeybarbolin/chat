import React from 'react';
import generateAvatarFromHash from './../../utils/generateAvatarFromHash';
import './Avatar.scss';

const Avatar = ({ user}) => {

    if (user.avatar) {
        
        return (
            <div className="user-avatar">
                <img 
                    src={ user.avatar } 
                    alt={ 'avatar' + user.fullname }
                    />
            </div>
        );
    } else {
        const {color, colorLightn} = generateAvatarFromHash(user._id);

        return (
            <div 
                className="user-avatar" 
                style={{ backgroundImage: `linear-gradient(135deg, ${color}, ${colorLightn})` }}
            >
                <span className="user-avatar__no-img">{ user.fullName[0].toUpperCase() }</span>
            </div>
        )
    }
}

export default Avatar
