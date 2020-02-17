import styled from 'styled-components'
import { Layout } from 'antd'

const { Content } = Layout;

const LayoutWrapper = styled(Layout)`
	width: 100%,
  position: absolute,
  top: 0,
  left: 0,
`

const ContentWrapper = styled(Content)`
	padding: 0 50px;
`

const ContentChildrenWrapper = styled.div`
	background: #fff;
	padding: 24px;
	minHeight: 85vh;
`

export {
	LayoutWrapper,
	ContentWrapper,
	ContentChildrenWrapper
}