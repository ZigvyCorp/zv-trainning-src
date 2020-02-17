import styled from 'styled-components'
import { PageHeader } from 'antd'

const WrapperPageHeader = styled(PageHeader)`
	font-size: 30px;
	font-weight: bold;
	margin-right: 20px;
	flex-grow: 3;
`

const WrapperHeaderBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: 5px;
	margin-bottom: 25px;
`

const WrapperFunctionBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items center;
	justify-content: space-between;
	flex-grow: 7;
`

export {
  WrapperPageHeader,
  WrapperHeaderBar,
  WrapperFunctionBar
}