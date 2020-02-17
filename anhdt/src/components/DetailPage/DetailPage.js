import React from 'react'
import { Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

import PageHeader from '../PageHeader'
import * as DetailPageStyle from './DetailPage.style'

import LeftMain from './LeftMain'
import RightMain from './RightMain'
import LeftSub from './LeftSub'
import RightSub from './RightSub'

import DetailRow from './DetailRow'

import imgSrc from '../../assets/images/wembley.jpg'

const DetailPage = (props) => {

	const params = props.match.params.id
	const itemData = props.stadiums.filter(item => item.id === params)

	const CustomLeftMain = <LeftMain img={imgSrc} />
	const CustomRightMain = <RightMain name={itemData[0].name} address={itemData[0].address} price={itemData[0].price} />
	const CustomLeftSub = <LeftSub />
	const CustomRightSub = <RightSub />

	return (
		<div>
			<DetailPageStyle.WrapperDetailHeader>
				<Link to="/">
					<DetailPageStyle.WrapperIcon type="arrow-left" />
				</Link>
				
			  <PageHeader
					title={"Ground Info"}
					onBack={() => window.history.back()}
					backIcon={<Icon type="arrow-left" />}
				/>
				
			</DetailPageStyle.WrapperDetailHeader>

			<DetailRow
				leftComponent={CustomLeftMain}
				rightComponent={CustomRightMain}
			/>

			<Divider />

			<DetailRow
				leftComponent={CustomLeftSub}
				rightComponent={CustomRightSub}
			/>

		</div>
	)
}

export default DetailPage

			
