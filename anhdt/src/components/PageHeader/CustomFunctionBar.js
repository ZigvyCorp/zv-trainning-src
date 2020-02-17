import React from 'react'

import { WrapperFunctionBar } from './PageHeader.style'

import CustomFilterPrice from '../../containers/PageHeader/CustomFilterPrice'
import CustomSort from '../../containers/PageHeader/CustomSort'
import CustomSearchName from '../../containers/PageHeader/CustomSearchName'

const CustomFunctionBar = () => {
	return (
		<WrapperFunctionBar>
			<CustomFilterPrice />
			<CustomSort />
			<CustomSearchName />
		</WrapperFunctionBar>
	)
}

export default CustomFunctionBar