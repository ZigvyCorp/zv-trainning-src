import React from 'react'

import StadiumList from '../../containers/StadiumList'
import PageHeader from '../PageHeader'

const HomePage = () => {
	return (
		<div>
			<PageHeader title='Grounds'/>
			<StadiumList />
		</div>

	)
}

export default HomePage