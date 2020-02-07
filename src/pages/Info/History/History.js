import React from 'react'
import Card from '../../../components/Card'
import HistoryItem from './HistoryItem'
import { Avatar } from 'antd'
import styled from 'styled-components'

const StyledCount =styled.span`
    color: green;
`

const CountDetailHistory = props => (
    <div>
        <StyledCount>{props.count}</StyledCount>
        { ' ' }
        <span>{props.title}</span>
    </div>
)

const History = () => {
    return (
        <Card title={'History'} count={2}>
            <HistoryItem
                avatar={<Avatar size={48} src={'https://www.w3schools.com/w3images/avatar2.png'} />}
                title={'Champions League'}
                titleDes={'05 Oct 2017'}
                description={[
                    <CountDetailHistory key={'Teams'} count={12} title={'Teams'} />,
                    <CountDetailHistory key={'Players'} count={202} title={'Players'} />
                ]}
            />
        </Card>
    )
}

export default History
