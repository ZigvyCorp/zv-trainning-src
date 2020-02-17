import { connect } from 'react-redux'

import CustomSort from '../../components/PageHeader/CustomSort'
import { getStadiumsBySortData } from '../../reducers/homePageReducer'

// const mapDispatchToProps = (dispatch) => ({
// 	handleSort: (sortValue) => { dispatch(getStadiumsBySortData(sortValue)) }
// })

const mapDispatchToProps = {
	handleSort: (sortValue) => getStadiumsBySortData(sortValue)
}

export default connect(
	null,
	mapDispatchToProps,
)(CustomSort)