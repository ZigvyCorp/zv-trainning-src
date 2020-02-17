import React from 'react'

import { WrapperInformation, WrapperPrice } from './Item.style'

const Information = ({ address, price }) => {
	return (
		<WrapperInformation>

			<p>{address}</p>
			<WrapperPrice>{price}</WrapperPrice>
			
		</WrapperInformation>
	)
}

export default Information