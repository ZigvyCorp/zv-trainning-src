import React, { Component } from 'react';
import Stradiums from '../containers/stradiumsContainer';

import { PageHeader, Button, Descriptions } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';

const { Search } = Input;
const { Option } = Select;

class home extends Component {
    render() {
        const {onSearchGrounds,onFilterPrice,onNameSort,onPriceSort} =this.props;
        return (
            <div className='container'>
                <div>
                    <PageHeader
                   
                    title="Grounds"
                    extra={[
                    <Select
                       key='price-filter'
                       showSearch
                       style={{ width: 150}}
                       placeholder="Price Range"
                       optionFilterProp="children"
                       onChange={onFilterPrice}
                        >
                       <Option value="all">No filter</Option>
                       <Option value="0_10">0-10 $</Option>
                       <Option value="10_20">10-20 $</Option>
                       <Option value="20_100">More than 20 $</Option>

                     </Select>,
                        <Select
                        key ='name-sort'
                        showSearch
                        style={{ width: 150 }}
                        placeholder="Sort by name"
                        optionFilterProp="children"
                        onChange={onNameSort}
                        >
                        <Option value="-1">No sorting</Option>
                        <Option value="1">Ascending</Option>
                        <Option value="0">Descending</Option>
                      </Select>,
                     <Select
                        key='price-sort'
                        showSearch
                        style={{ width: 150 }}
                        placeholder="Sort by Price"
                        optionFilterProp="children"
                        onChange={onPriceSort}
                      >
                        <Option value="-1">No sorting</Option>
                        <Option value="1">Ascending</Option>
                        <Option value="0">Descending</Option>
 
                      </Select>,
                       <Search className='search-ground'
                       placeholder="search by name"
                       onSearch={onSearchGrounds}
                       style={{ width: 200 }}
                     />
                    ]}
                    >
                    </PageHeader>
                </div>

                <div>
                    <Stradiums />  
                </div>
            </div>
        )
    }
}

export default home;

