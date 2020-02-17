const sortByPrice = (a, b) => {
	return Number(a.price) === Number(b.price) ? 0 : (Number(a.price) < Number(b.price)) ? 1 : -1
}

const sortByPriceReverse = (a, b) => {
	return Number(a.price) === Number(b.price) ? 0 : (Number(a.price) > Number(b.price)) ? 1 : -1
}

const sortByName = (a, b) => {
	return a.name.toLowerCase() === b.name.toLowerCase() ? 0 : (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1
}

const sortByNameReverse = (a, b) => {
	return a.name.toLowerCase() === b.name.toLowerCase() ? 0 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1
}

export {
	sortByPrice,
	sortByPriceReverse,
	sortByName,
	sortByNameReverse,
}