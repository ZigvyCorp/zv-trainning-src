
import { connect } from 'react-redux';
import home from '../pages/home';
import {SearchGrounds,FilterGrounds,NameSort,PriceSort} from '../actions/index';


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
        },
        onFilterPrice:(value)=>{
            dispatch(FilterGrounds(value));
        },
        onNameSort:(value)=>{
            dispatch(NameSort(value))
        },
        onPriceSort:(value)=>{
            dispatch(PriceSort(value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(home);