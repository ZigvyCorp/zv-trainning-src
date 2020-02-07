import  { FILTER_GROUNDS ,SEARCH_GROUNDS,GET_GROUNDS,SORT_GROUNDS,NAME_SORT,PRICE_SORT} from './styles';


export const SearchGrounds = (searchValue) =>{
    return {
        type: SEARCH_GROUNDS,        
        searchValue:searchValue  
    }
}

export const GetGrounds= () =>{
    return {
        type: GET_GROUNDS
    }
}


export const FilterGrounds = (range) =>{
    return {
        type: FILTER_GROUNDS,        
        range:range    
    }
}


export const NameSort=(value)=>{
    return{
        type:NAME_SORT,
        value:value,
    }
}

export const PriceSort=(value)=>{
    return{
        type:PRICE_SORT,
        value:value,
    }
}
