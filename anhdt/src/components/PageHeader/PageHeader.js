import React from 'react'

import * as PageHeaderStyle from './PageHeader.style'
import CustomFunctionBar from './CustomFunctionBar'

const CustomPageHeader = ({ title })  => {
	return (
		<PageHeaderStyle.WrapperHeaderBar>

			<PageHeaderStyle.WrapperPageHeader
				title={title}
			/>

			{ title === "Grounds" && <CustomFunctionBar /> }
			
		</PageHeaderStyle.WrapperHeaderBar>
		
	)
}

export default CustomPageHeader