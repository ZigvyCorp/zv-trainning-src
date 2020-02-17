import React from 'react'

import Logo from '../Logo'
import SearchField from './SearchField'
import Menu from './Menu'
import Profile from './Profile'

import * as HeaderStyle from './Header.style'

const CustomHeader = () => (
	<HeaderStyle.Wrapper>
		<HeaderStyle.CustomHeader>
    
    	<Logo />

    	<SearchField />

	    <Menu />

	    <Profile />

	  </HeaderStyle.CustomHeader>

	</HeaderStyle.Wrapper>

)

export default CustomHeader