import { connect } from 'react-redux'

import StadiumList from '../../components/StadiumList'
import { fetchDataStadiums } from '../../reducers/homePageReducer'

const mapStateToProps = (state) => ({
	stadiums: state.stadiums,
})

// const mapDispatchToProps = (dispatch) => ({
// 	getData: () => { dispatch(doGetData()) }
// })

const mapDispatchToProps = {
	getData: () => fetchDataStadiums()
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(StadiumList)