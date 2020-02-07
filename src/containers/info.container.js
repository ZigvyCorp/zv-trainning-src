import { connect } from "react-redux"
import { GroundAction } from "../actions/ground.action"
import Info from "../pages/Info"

const mapStateToProps = (state) => {
    return {
        ground: state.groundReducer.ground
    }
}

const mapDispatchToProps = {
    getGround: GroundAction.get
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)