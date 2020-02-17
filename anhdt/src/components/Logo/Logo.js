import React from 'react'

import * as LogoStyle from './Logo.style'

const Logo = () => {
	return (
		<LogoStyle.CustomLink to="/">

			<LogoStyle.CustomLogo>

				<LogoStyle.CustomIcon
				  type={"eye"}
					theme={"filled"}
				/>

		    Football<LogoStyle.CustomSpan>Party</LogoStyle.CustomSpan>

			</LogoStyle.CustomLogo>

		</LogoStyle.CustomLink>
	)
}

export default Logo