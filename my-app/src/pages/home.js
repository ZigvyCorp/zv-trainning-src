import React, { Component } from 'react';
import Stradiums from '../components/List/Stradiums';
import {SearchGrounds} from '../actions/index';

import { PageHeader, Button, Descriptions } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
import {connect} from 'react-redux';

const { Search } = Input;
const { Option } = Select;

class home extends Component {
    render() {
        const {onSearchGrounds} =this.props;
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
                       <Option value="1">0-10</Option>
                       <Option value="2">10-20</Option>
                       <Option value="3">more than 10</Option>

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


const mapStateToProps = state =>{
    console.log(state);
    return {
        grounds: state.grounds? state.grounds :[]
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onSearchGrounds: (searchValue)=>{
            dispatch(SearchGrounds(searchValue));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(home);

