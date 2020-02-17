import React from 'react' 
import { Select } from 'antd'

const { Option } = Select

const onChange = (value) => {
	console.log(`onChange ${value}`)
}

const onBlur = () => {
	console.log('onBlur')
}

const onFocus = () => {
	console.log('onFocus')
}

const onSearch = (val) => {
	console.log(`onSearch ${val}`)
}

const selectBarOptions = {
	nameAsc: 'Sorted by name (asc)',
	nameDesc: 'Sorted by name (desc)',
	priceAsc: 'Sorted by price (lowest)',
	priceDesc: 'Sorted by price (highest)',

}


const CustomSort = ({ handleSort }) => {
	return (
		<Select
    	showSearch
    	placeholder="Sort by..."
    	optionFilterProp="children"
    	onChange={onChange}
    	onFocus={onFocus}
    	onBlur={onBlur}
    	onSearch={onSearch}
    	filterOption={(input, option) => (
	      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    	)}
  	>
	    <Option value="pa">{selectBarOptions.priceAsc}</Option>
    	<Option value="pd">{selectBarOptions.priceDesc}</Option>
    	<Option value="na">{selectBarOptions.nameAsc}</Option>
    	<Option value="nd">{selectBarOptions.nameDesc}</Option>
  	</Select>
	)
}

export default CustomSort