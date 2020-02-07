import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Avatar } from 'antd';
import Price from '../../components/Price';

const { Meta } = Card;


const Detail = props => {
    return (
        <Card
            style={{ width: 300, borderLeft: 'none', borderRight: 'none' }}
            actions={[
                <><Icon type="setting" key="setting" /><span>Settin</span></>,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={'Phuong Nguyen'}
                description="This is the description"
            />
            <Price>{props.price}</Price>
        </Card>
    )
}

Detail.propTypes = {

}

export default Detail
