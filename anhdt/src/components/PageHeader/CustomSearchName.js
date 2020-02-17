import React from 'react'
import { Input } from 'antd'

const { Search } = Input

const CustomSearchName = ({ handleSearch }) => {
	return (
		<Search
      placeholder="Search Ground..."
      enterButton="Search"
      size="large"
      onSearch={searchValue => handleSearch(searchValue)}
    />
	)
}

export default CustomSearchName
