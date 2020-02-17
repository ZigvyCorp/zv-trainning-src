import * as CONSTANTS from '../constants'

const initialState = []

export const homePageReducer = (state = initialState, action) => {
	switch(action.type) {
		case CONSTANTS.STADIUMS_SET_ALL :
			return action.data
		default:
			return state
	}
}

// action_creators
export const getDataStadium = () => ({
  type: CONSTANTS.STADIUMS_GET_ALL,
})

/////////////////////////////////////////////////////////////////////////
export const fetchDataStadiums = () => ({
  type: CONSTANTS.STADIUMS_FETCH_ALL,
})

export const fetchDataStadiumsSuccess = () => ({
  type: CONSTANTS.STADIUMS_FETCH_SUCCESS,
})

export const fetchDataStadiumsFail = () => ({
  type: CONSTANTS.STADIUMS_FETCH_FAIL,
})
//////////////////////////////////////////////////////////////////////////

export const getStadiumsByFilterPriceData = (filterValue) => ({
  type: CONSTANTS.STADIUMS_FILTER_PRICE,
  value: filterValue,
})

export const getStadiumsBySortData = (sortValue) => ({
  type: CONSTANTS.STADIUMS_SORT_DATA,
  value: sortValue,
})

export const getStadiumsBySearchNameData = (searchValue) => ({
  type: CONSTANTS.STADIUMS_SEARCH_NAME,
  value: searchValue,
})

export const setStadiums = (stadiums) => ({
  type: CONSTANTS.STADIUMS_SET_ALL,
  data: stadiums,
})