import Home from './../pages/Home'
import { connect } from 'react-redux'
import { FETCHING_GROUNDS } from '../contants'
import { GroundAction } from '../actions/ground.action'

const mapStateToProps = (state) => {
    return {
        grounds: state.groundReducer.grounds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRounds: (filter) => dispatch(GroundAction.getAll(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)