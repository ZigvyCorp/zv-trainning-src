import React from 'react';
import Meta from '../../../components/Meta';


const CommentItem = props => {
    return (
        <div>
            <Meta
                {...props}
                rate
            />
        </div>
    )
}

export default CommentItem
