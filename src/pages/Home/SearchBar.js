import React from 'react'
import { Select } from 'antd'
import styled from 'styled-components';
const { Option } = Select;


const StyledTitle = styled.h1`
    display: inline-block;
`

const SearchBar = () => {
    return (
        <div>
            <StyledTitle>Title</StyledTitle>
            <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </div>
    )
}

export default SearchBar
