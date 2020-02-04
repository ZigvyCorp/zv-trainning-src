import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import Detail from './Detail'
import Comment from './Comment/index'
import Rate from '../../components/Rate'
import History from './History'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FETCHING_GROUND } from '../../contants'

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

Info.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        ground: state.infoReducer.ground
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGround: (id) => dispatch({ type: FETCHING_GROUND, payload: { id } })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Info))
