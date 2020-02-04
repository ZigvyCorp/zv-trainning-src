import { Rate as RateAntd } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledRate = styled(RateAntd)`
    color: green;
`

const Rate = props => <StyledRate {...props} />

export default Rate
