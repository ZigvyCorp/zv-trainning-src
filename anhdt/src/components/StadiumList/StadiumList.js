import React, { useEffect } from 'react'

import List from '../List'

const StadiumList = ({ stadiums, getData}) => {

	useEffect(() => {
		getData()
	}, [stadiums])

	if(stadiums !== false) {
		return <List data={stadiums}/>
	} else {
		return <p>No data available</p>
	}
}

export default StadiumList