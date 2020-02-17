import styled from 'styled-components'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

const CustomLink = styled(Link)`
	text-decoration: none;
`

const CustomLogo = styled.div`
	display: flex;
	align-items: center;
	color: #56aa0a;
	font-size: 22px;
`

const CustomIcon = styled(Icon)`
	padding-right: 5px;
`

const CustomSpan = styled.span`
	font-weight: bold;
`

export {
	CustomLink,
	CustomLogo,
	CustomIcon,
	CustomSpan,
}