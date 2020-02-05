import React, { Component } from 'react';
import Stradiums from '../components/List/Stradiums';
import { PageHeader, Button, Descriptions } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
const { Search } = Input;
const { Option } = Select;

export default class home extends Component {
    render() {
        return (
            <div className='container'>
                <div>
                    <PageHeader
                   
                    title="Grounds"
                    extra={[
                        <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Nearest"
                        optionFilterProp="children"
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>,
                       <Select
                       showSearch
                       style={{ width: 100 }}
                       placeholder="Price Range"
                       optionFilterProp="children"
                     >
                       <Option value="jack">Jack</Option>
                       <Option value="lucy">Lucy</Option>
                       <Option value="tom">Tom</Option>

                     </Select>,
                     <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Price Range"
                        optionFilterProp="children"
                      >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
 
                      </Select>,
                       <Search className='search-ground'
                       placeholder="search ground"
                       onSearch={value => console.log(value)}
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
