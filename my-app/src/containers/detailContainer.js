
import { connect } from 'react-redux';
import detail from '../pages/details';
import {GetSingleGrounds} from '../actions/index';

const mapDispatchToProps = dispatch =>{
    return {
        onGetSingleGrounds: (id) =>{
            dispatch(GetSingleGrounds(id));
        }
    }
}
const mapStateToProps = state =>{
    console.log(state);
    return {
        grounds: state.grounds? state.grounds :[]
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(detail);

