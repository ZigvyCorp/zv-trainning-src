import React, { useReducer } from 'react'
import { Select, Input } from 'antd'
import styled from 'styled-components';
const { Option } = Select;
const { Search } = Input;


const StyledTitle = styled.h1`
    display: inline-block;
`

const StyledSelect = styled.div`
    display: inline-block;
    margin: 0px 35px;
`

const SearchBar = props => {
    const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }),
        {
            sortPrice: '+',
            sortName: '+',
            filterPrice: '20-30',
            search: ''
        })

    const handleChange = (name) => (value) => {
        setUserInput({ [name]: value })
    }

    const handleSearch = () => {
        const { onSearch } = props
        const { filterPrice, sortName, sortPrice, search } = userInput
        const data = {
            filter: filterPrice,
            search,
            sort_by: [sortPrice + 'price', sortName + 'name']
        }
        onSearch(data)
    }

    return (
        <div>
            <StyledTitle>Title</StyledTitle>
            <StyledSelect>
                <span>Sort Name:</span>
                <Select defaultValue="+" style={{ width: 120 }} onChange={handleChange('sortName')}>
                    <Option value="+">A-Z</Option>
                    <Option value="-">Z-A</Option>
                </Select>
            </StyledSelect>
            <StyledSelect>
                <span>Sort Pricre:</span>
                <Select defaultValue="+" style={{ width: 120 }} onChange={handleChange('sortPrice')}>
                    <Option value="+">A-Z</Option>
                    <Option value="-">Z-A</Option>
                </Select>
            </StyledSelect>
            <StyledSelect>
                <span>Filter Pricre:</span>
                <Select defaultValue="20-30" style={{ width: 120 }} onChange={handleChange('filterPrice')}>
                    <Option value="20-30">20-30</Option>
                    <Option value="30-50">30-50</Option>
                    <Option value="20-70">20-70</Option>
                </Select>
            </StyledSelect>
            <StyledSelect>
                <Search
                    placeholder="Search name"
                    onChange={handleChange('search')}
                    enterButton={true}
                    onSearch={handleSearch}
                    style={{ width: 200 }}
                />
            </StyledSelect>
        </div>
    )
}

export default SearchBar
