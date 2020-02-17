import { connect } from 'react-redux'

import DetailPage from '../../components/DetailPage'

const mapStateToProps = (state) => ({
	stadiums: state.stadiums,
})

export default connect(mapStateToProps)(DetailPage)

			
