import React from 'react'
import ListItem from './ListItem'
import SearchBar from './SearchBar'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FETCHING_GROUNDS } from '../../contants'

const StyledCol = styled(Col)`
    margin-bottom: 25px;
`

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRounds();
    }

    render() {
        const { grounds } = this.props;
        return (
            <div>
                <SearchBar />
                <Row type="flex">
                    {grounds.map((ground) => (
                        <StyledCol key={ground.id} span={8}>
                            <ListItem id={ground.id} img={ground.urlImages} name={ground.name} address={ground.address} price={ground.price} />
                        </StyledCol>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Home
