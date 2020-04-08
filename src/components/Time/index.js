import React from 'react'
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru'

const Time = ({date}) => (
    <time>
        {
            formatDistanceToNow(date, 
                {
                    addSuffix: true,
                    locale: ruLocale
                }
            )
        }
    </time>
)

Time.propTypes = {
    date: PropTypes.string
}

export default Time
