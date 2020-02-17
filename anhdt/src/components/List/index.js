import React from 'react'

import CustomList from './List'

const ListComponent = (props) => {
	return (
    <CustomList { ...props } />
  )
}

export default ListComponent
