import { Col, Row } from 'antd'
import React from 'react'
import { withRouter } from 'react-router-dom'
import Rate from '../../components/Rate'
import Comment from './Comment/Comment'
import Detail from './Detail'
import History from './History'

class Info extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { match: { params: { id } }, getGround } = this.props;
        getGround(id);
    }

    render() {
        const { ground } = this.props;
        return (
            <div>
                <Row>
                    <Col span={16}><img src={ground.urlImages} /></Col>
                    <Col span={8}>
                        <h1>{ground.name}</h1>
                        <span>{ground.address}</span>
                        <Rate allowHalf defaultValue={2.5} />
                        <Detail price={ground.price} />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={16}>
                        <Comment />
                    </Col>
                    <Col span={8}>
                        <History />
                    </Col>
                </Row>
            </div>
        )
    }
}



export default withRouter(Info)
