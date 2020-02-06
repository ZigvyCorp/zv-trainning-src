import React, { useEffect } from 'react'
import ListItem from './ListItem'
import SearchBar from './SearchBar'
import { Row, Col, notification } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FETCHING_GROUNDS } from '../../contants'


const StyledCol = styled(Col)`
    margin-bottom: 25px;
`


const Home = (props) => {
    useEffect(() => {
        props.getRounds();
    }, [])

    const { grounds } = props;
    return (
        <div>
            <SearchBar onSearch={(data) => {
                console.log(data)
                props.getRounds(data)
            }} />
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

export default Home
