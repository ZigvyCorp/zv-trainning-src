import React from 'react'

import StadiumList from './StadiumList'

const StadiumListComponent = ({ stadiums, getData }) => {
	return (
		<StadiumList
		  stadiums={stadiums}
		  getData={getData}
		/>
	)
}

export default StadiumListComponent