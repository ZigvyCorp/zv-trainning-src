import Home from './../pages/Home'
import { connect } from 'react-redux'
import { FETCHING_GROUNDS } from '../contants'

const mapStateToProps = (state) => {
    return {
        grounds: state.homeReducer.grounds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRounds: () => dispatch({ type: FETCHING_GROUNDS })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)