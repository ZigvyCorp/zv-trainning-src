import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import SearchBar from './SearchBar'


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
