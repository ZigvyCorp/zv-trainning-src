import { connect } from 'react-redux'
import { GroundAction } from '../actions/ground.action'
import Home from '../pages/Home'

const mapStateToProps = (state) => {
    return {
        grounds: state.groundReducer.grounds
    }
}

const mapDispatchToProps = {
    getRounds: GroundAction.getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)