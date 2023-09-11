import React from 'react';
import Details from './Details';
const Friend = props => {
    return (
        <div className='friend'>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.id)}>
                See details
            </button>
        </div>
  )
}

export default Friend;