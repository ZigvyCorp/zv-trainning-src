import { connect } from 'react-redux'

import CustomSearchName from '../../components/PageHeader/CustomSearchName'
import { getStadiumsBySearchNameData } from '../../reducers/homePageReducer'

// const mapDispatchToProps = (dispatch) => ({
// 	handleFilter: (filterValue) => { dispatch(doFilterPriceData(filterValue)) },
// 	handleSort: (sortValue) => { dispatch(doSortData(sortValue)) },
// 	handleSearch: (searchValue) => { dispatch(doSearchNameData(searchValue)) },
// })

const mapDispatchToProps = {
	handleSearch: (searchValue) => getStadiumsBySearchNameData(searchValue)
}

export default connect(
	null,
	mapDispatchToProps,
)(CustomSearchName)