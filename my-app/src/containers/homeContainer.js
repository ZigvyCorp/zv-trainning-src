import { connect } from 'react-redux';
import home from '../pages/home';
import {SearchGrounds,FilterGrounds,NameSort,PriceSort} from '../actions/index';


const mapStateToProps = state =>{
    return {
        grounds: state.grounds? state.grounds :[]
    }
}

const mapDispatchToProps={   
        onSearchGrounds:SearchGrounds,
        onFilterPrice:FilterGrounds,
        onNameSort:NameSort,
        onPriceSort:PriceSort    
}


export default connect(mapStateToProps,mapDispatchToProps   
)(home);


