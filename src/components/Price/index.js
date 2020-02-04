import React from 'react'
import styled from 'styled-components'

const StyledPrice = styled.span`
        color: green;
        font-size: 1.5rem;
        font-weight: 400;
    `
const Price = props => {
    return (
        <div>
            <StyledPrice>{props.children}{' '}{'$'}</StyledPrice>
        </div>
    )
}


export default Price
