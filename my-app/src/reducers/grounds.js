
import {FILTER_GROUNDS_SUCCESS,SEARCH_GROUNDS_SUCCESS
   ,GET_GROUNDS_SUCCESS ,NAME_SORT_SUCCESS,PRICE_SORT_SUCCESS,
    GET_SINGLE_GROUND_SUCCESS
} from '../actions/styles';

 
let initalState={
    grounds: [],
    ground:{},
    nameSorting:-1,
    priceSorting:-1,
    price: 'all',
    search:''
  }

export default function GroundReducers(state = initalState, action) {
    switch (action.type) {
      case NAME_SORT_SUCCESS:
        return {
          ...state,
          nameSorting: action.value,
        };
      case PRICE_SORT_SUCCESS:
            return {
              ...state,
              priceSorting: action.value,
            };
      case SEARCH_GROUNDS_SUCCESS:
            return{
                ...state,
                grounds:action.grounds,
                search:action.search
            }
     case FILTER_GROUNDS_SUCCESS:            
        return{
            ...state,
            grounds:action.grounds,
            price:action.price
        }
        case GET_GROUNDS_SUCCESS:
            return{
                ...state,
                grounds:action.grounds
            }
        case GET_SINGLE_GROUND_SUCCESS:
          return{
            ...state,
              ground:action.ground
          }
      default:
        return state;
    }
}