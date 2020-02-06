
import {FILTER_GROUNDS ,FILTER_GROUNDS_SUCCESS,FILTER_GROUNDS_ERROR,
    SEARCH_GROUNDS,SEARCH_GROUNDS_SUCCESS,SEARCH_GROUNDS_ERROR 
    ,GET_GROUNDS,GET_GROUNDS_SUCCESS ,GET_GROUNDS_ERROR
    ,SORT_GROUNDS,SORT_GROUNDS_SUCCESS,SORT_GROUNDS_ERROR,
    NAME_SORT,NAME_SORT_SUCCESS,NAME_SORT_ERROR,PRICE_SORT,PRICE_SORT_SUCCESS,PRICE_SORT_ERROR
} from '../actions/styles';


let initalListGrounds=[
    {
        "id":1,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":5 
    },
    {
        "id":2,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Stamford Bridge",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":10
    },
    {
        "id":3,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":15
    },
    {
        "id":4,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":20
    },
    {
        "id":5,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":25
    },
    {
        "id":6,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":30
    }
]
 
let initalState={
    grounds: initalListGrounds,
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
                search:action.searchValue
            }
        case FILTER_GROUNDS_SUCCESS:            
        return{
            ...state,
             price:action.price
        }
        case GET_GROUNDS_SUCCESS:
            return{
                ...initalState
            }
      default:
        return state;
    }
}