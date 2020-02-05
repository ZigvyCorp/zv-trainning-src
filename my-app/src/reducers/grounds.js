
import {FILTER_GROUNDS ,FILTER_GROUNDS_SUCCESS,FILTER_GROUNDS_ERROR,
    SEARCH_GROUNDS,SEARCH_GROUNDS_SUCCESS,SEARCH_GROUNDS_ERROR 
    ,GET_GROUNDS,GET_GROUNDS_SUCCESS ,GET_GROUNDS_ERROR} from '../actions/styles';


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
 
const GroundReducers = (grounds= initalListGrounds, action) => {
    switch (action.type) {
        //Get data
        case SEARCH_GROUNDS_SUCCESS:
            {
                let result=grounds.filter(ground=>{
                    return(ground.title.includes(action.searchValue))
                })
                return grounds=result;
                
            }

        //search
        case GET_GROUNDS_SUCCESS :
            return grounds;
        //filter
        case FILTER_GROUNDS:
            return action.Danh_sach_Tivi;

        case FILTER_GROUNDS_ERROR:
            return [];
            
        default:
            return grounds;
    }
}
export default GroundReducers;
