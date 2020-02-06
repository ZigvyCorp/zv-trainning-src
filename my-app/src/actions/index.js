


import {FILTER_GROUNDS ,FILTER_GROUNDS_SUCCESS,FILTER_GROUNDS_ERROR,
    SEARCH_GROUNDS,SEARCH_GROUNDS_SUCCESS,SEARCH_GROUNDS_ERROR 
,GET_GROUNDS,GET_GROUNDS_SUCCESS ,GET_GROUNDS_ERROR ,
SORT_GROUNDS,SORT_GROUNDS_SUCCESS,SORT_GROUNDS_ERROR,
NAME_SORT,NAME_SORT_SUCCESS,NAME_SORT_ERROR,
PRICE_SORT,PRICE_SORT_SUCCESS,PRICE_SORT_ERROR
} from './styles';


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
