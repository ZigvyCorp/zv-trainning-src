import React from 'react'
import { Row, Col, Avatar } from 'antd'
import styled from 'styled-components'
import Rate from '../Rate'


const Title = styled.span`
    font-weight: bold;
    margin-right: 25px;
`

const TitleDes = styled.span`
    color: grey;
    font-weight: 400;
`

const Meta = props => {
    const isAvatar = !!props.avatar;
    return (
        <Row>
            {isAvatar
                &&
                <Col span={4} style={{textAlign:"center"}}>
                    {props.avatar}
                </Col>
            }
            <Col span={isAvatar && 20}>
                <div>
                    <Title>{props.title}</Title>
                    {props.rate && <Rate allowHalf defaultValue={2.5} />}
                </div>
                <div>
                    <TitleDes>{props.titleDes}</TitleDes>
                </div>
                <div>
                    {props.description}
                </div>
            </Col>
        </Row>
    )
}

export default Meta
