import React from 'react'

const Card = props => {
    const title = `${props.title}` + (props.count ? ` (${props.count})` : '')
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            {props.children}
        </div>
    )
}

export default Card
