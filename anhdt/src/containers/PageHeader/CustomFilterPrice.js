import { connect } from 'react-redux'

import CustomFilterPrice from '../../components/PageHeader/CustomFilterPrice'
import { getStadiumsByFilterPriceData } from '../../reducers/homePageReducer'

// const mapDispatchToProps = (dispatch) => ({
// 	handleFilter: (filterValue) => { dispatch(getStadiumsByFilterPriceData(filterValue)) },
// })

const mapDispatchToProps = {
	handleFilter: (filterValue) => getStadiumsByFilterPriceData(filterValue),
}

export default connect(
	null,
	mapDispatchToProps,
)(CustomFilterPrice)