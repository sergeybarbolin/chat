import React from 'react'
import PropTypes from 'prop-types';

import readedSvg from './../../assets/img/readed.svg';
import noReadedSvg from './../../assets/img/noreaded.svg';


const IconReadStatus = ({ readed }) => (
    <img 
        className="icon-read-status" 
        src={ readed ? readedSvg : noReadedSvg  } 
        alt="icon-read-status" 
    /> 
)

IconReadStatus.propTypes = {
    readed: PropTypes.bool,
}

export default IconReadStatus
