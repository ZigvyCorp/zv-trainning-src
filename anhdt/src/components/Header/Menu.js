import React from 'react'
import { Menu } from 'antd'

import * as HeaderStyle from './Header.style'

const { Item } = Menu

const CustomMenu = () => (
	<HeaderStyle.CustomMenu>

		<HeaderStyle.CustomMenuChild>

			<Item key="1"><HeaderStyle.CustomA>FIND MATCH</HeaderStyle.CustomA></Item>
		  <Item key="2"><HeaderStyle.CustomA>GROUNDS</HeaderStyle.CustomA></Item>
		  <Item key="3"><HeaderStyle.CustomA>MESSAGES</HeaderStyle.CustomA></Item>
		  <Item key="4"><HeaderStyle.CustomA>UPCOMING</HeaderStyle.CustomA></Item>
		
		</HeaderStyle.CustomMenuChild>

	</HeaderStyle.CustomMenu>	
)

export default CustomMenu