import styled from 'styled-components'
import { Layout, Menu, Avatar } from 'antd'

const { Header } = Layout

const CustomA = styled.a`
	margin-right: 15px;
`

const Wrapper = styled.div`
	width: 100%;
`

const CustomHeader = styled(Header)`
	width: 100%;
  background-color: black;
  display: flex;
	flex-direction: row;
	align-items: center;
  justify-content: space-around;
  padding: 0 10px;
`

const CustomMenu = styled(Menu)`
	display: flex;
	flex-direction: row;
	color: white;
`

const CustomMenuChild = styled.div`
	list-style-type: none;
	display: flex;
	flex-direction: row;
`

const CustomAvatar = styled(Avatar)`
	background-color: white;
`

export {
	CustomA,
	Wrapper,
	CustomHeader,
	CustomMenu,
	CustomMenuChild,
	CustomAvatar,
}