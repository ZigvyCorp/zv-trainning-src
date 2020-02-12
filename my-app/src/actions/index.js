import  { FILTER_GROUNDS ,SEARCH_GROUNDS,GET_GROUNDS,NAME_SORT,PRICE_SORT,GET_SINGLE_GROUND} from './styles';


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

export const GetSingleGrounds=(id)=>{
    return{
        type:GET_SINGLE_GROUND,
        id:id
    }
}
