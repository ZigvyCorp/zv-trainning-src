import React from 'react'
import { Card, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Link, Redriect } from 'react-router-dom';
import Price from '../../components/Price';
const { Meta } = Card;

const ListItem = props => {
    let history = useHistory();
    const routeChange = () => {
        history.push('/info/' + props.id)
    }
    return (
        <Card
            onClick={() => routeChange()}
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={props.img} />}
        >
            <Row>
                <Col span={18}>
                    <Meta title={props.name} description={props.address} />
                </Col>
                <Col span={6} style={{ textAlign: 'center' }}>
                    <Price>{props.price}</Price>
                </Col>
            </Row>
        </Card>
    )
}

ListItem.propTypes = {

}

export default ListItem
