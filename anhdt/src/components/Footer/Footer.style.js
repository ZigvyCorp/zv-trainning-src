import styled from 'styled-components'
import { Layout, Icon } from 'antd'

import CustomIcon from './CustomIcon'

const { Footer } = Layout

const Wrapper = styled.div`
	min-height: 15vh;
	padding: 20px;
`

const ChildWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
	justify-content: ${props => props.justifyContent};
`

const CustomCategory = styled.a`
	display: inline-block;
	margin: 0 10px;
`

const CustomFooter = styled(Footer)`
	height: 100%;
`

const CustomIconCopyRight = styled(Icon)`
	font-size: 15px;
`

const CustomIconWrapper = styled(CustomIcon)`
	margin: 0 10px;
`

export {
	Wrapper,
	ChildWrapper,
	CustomCategory,
	CustomFooter,
	CustomIconCopyRight,
	CustomIconWrapper,
} 