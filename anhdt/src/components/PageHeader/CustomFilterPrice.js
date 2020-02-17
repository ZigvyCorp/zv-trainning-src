import React from 'react'

import { Input } from 'antd'

const { Search } = Input

const CustomFilterPrice = ({ handleFilter }) => {
	return (
		<Search
      placeholder="Filter price..."
      enterButton="Search"
      size="large"
      onSearch={value => handleFilter(value)}
    />
	)
}

export default CustomFilterPrice