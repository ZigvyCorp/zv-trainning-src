import styled from 'styled-components'
import { Row, Button, Icon } from 'antd'

const Wrapper = styled(Row)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`

const CustomButton = styled(Button)`
	background-color: #56aa0a;
	color: #ffffff;
`

const WrapperDetailHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;	
`

const WrapperIcon = styled(Icon)`
	font-size: 25px,
`

export {
	Wrapper,
	WrapperIcon,
	CustomButton,
	WrapperDetailHeader,
} 
