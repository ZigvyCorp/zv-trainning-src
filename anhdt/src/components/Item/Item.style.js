import styled from 'styled-components'
import { Link } from 'react-router-dom'

const WrapperInformation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const WrapperLink = styled(Link)`
	text-decoration: none;
	color: #808080;

	&:hover {
    text-decoration: underline;
  }
`

const WrapperName = styled.p`
	font-size: 25px;
	color: black;
`

const WrapperPrice = styled.p`
	color: #58ac0d;
	font-size: 20px;
	font-weight: bold;	

	&:before {
    content: "$";
  }

  &:after {
    content: " /hour";
  }
`

export {
	WrapperInformation,
	WrapperLink,
	WrapperName,
	WrapperPrice,
}