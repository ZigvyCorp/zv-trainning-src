import React from 'react'
import { Card } from 'antd'

import StadiumImage from '../../assets/images/wembley.jpg'
import Name from './Name'
import Information from './Information'

import { WrapperLink } from './Item.style'

const { Meta } = Card

const Item = (props) => {
	
	const StadiumNameComponent = <Name
		name={props.name}
	/>

	const InformationComponent = <Information 
		address={props.address}
		price={props.price}
	/>

	return (
		<WrapperLink to={`/detail/${props.id}`}>
			<Card
				cover={
		  		<img
		  		  src={StadiumImage}
		  		  width="350"
		  		  height="200"
		  		  alt={"stadium_photo"}
		  		/>
				}
			>

				<Meta
				  title={StadiumNameComponent}
				  description={InformationComponent}
				/>
				
			</Card>

		</WrapperLink>		
	)
}

export default Item
