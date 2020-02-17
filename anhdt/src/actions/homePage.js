export const doGetData = () => ({
	type: 'GET_STADIUMS',
})

export const doFilterPriceData = (filterValue) => ({
	type: 'FILTER_PRICE',
	value: filterValue,
})

export const doSortData = (sortValue) => ({
	type: 'SORT_DATA',
	value: sortValue,
})

export const doSearchNameData = (searchValue) => ({
	type: 'SEARCH_NAME',
	value: searchValue,
})


