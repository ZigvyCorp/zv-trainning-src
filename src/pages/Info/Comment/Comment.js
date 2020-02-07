import React from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'
import Card from '../../../components/Card'
import { Avatar } from 'antd'

const Comment = props => {
    return (
        <Card title={'Comments & Reviews'} count={4}>
            <CommentItem
                avatar={<Avatar size={64} src={'https://www.w3schools.com/w3images/avatar2.png'} />}
                title={'Neymar'}
                titleDes={'FC Barcelona'}
                description={`Magna magna cillum et ad cillum anim ullamco sit cillum.`}
            />
        </Card>
    )
}

Comment.propTypes = {

}

export default Comment
