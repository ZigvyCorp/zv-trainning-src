import { Card, Col, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
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
