import { FILTER_GROUNDS ,FILTER_GROUNDS_SUCCESS,FILTER_GROUNDS_ERROR,
         SEARCH_GROUNDS,SEARCH_GROUNDS_SUCCESS,SEARCH_GROUNDS_ERROR 
        ,GET_GROUNDS,GET_GROUNDS_SUCCESS ,GET_GROUNDS_ERROR,
         NAME_SORT,NAME_SORT_SUCCESS,NAME_SORT_ERROR,PRICE_SORT,PRICE_SORT_SUCCESS,PRICE_SORT_ERROR,
         GET_SINGLE_GROUND_SUCCESS,GET_SINGLE_GROUND,GET_SINGLE_GROUND_ERROR
} from '../actions/styles';
import { put,takeLatest,all } from 'redux-saga/effects';

const  initalListGrounds=[
    {
        "id":1,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":5,
        "owner":"Han Solo"
        
    },
    {
        "id":2,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Stamford Bridge",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":10,
        "owner":"Han Solo"
    },
    {
        "id":3,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Emirates Stadium",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":15,
        "owner":"Han Solo"
    },
    {
        "id":4,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":20,
        "owner":"Han Solo"
    },
    {
        "id":5,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Anfield Stadium",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":25,
        "owner":"Han Solo"
    },
    {
        "id":6,
        "imageURL":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg",
        "title":"Old trafford",
        "description":"Sir Matt Busby Way, Stretford, Manchester M16 0RA, United Kingdom",
        "price":30,
        "owner":"Han Solo"
    }
]

// Get grounds
export function* GetGrounds() {
    try{
        yield put({
            type: GET_GROUNDS_SUCCESS,
            grounds:initalListGrounds
        });
     }
    catch (error) {
        console.log(error);
         yield put({ type:GET_GROUNDS_ERROR, error: error});
    }
}

// Search grouds
export function* SearchGrounds(action) {
    try{
        let searchedResult=  initalListGrounds.filter(g=>{
            return(g.title.toLowerCase().includes(action.searchValue.toLowerCase()))
        })
        yield put({
            type: SEARCH_GROUNDS_SUCCESS,
            grounds:searchedResult,
            search:action.searchValue
        });
     }
    catch (error) {
         yield put({ type:SEARCH_GROUNDS_ERROR, error: error});
    }
}

// Filter grounds
export function* FilterGrounds(action) {
    try{
        let filteredGrounds=initalListGrounds.filter(g => {
            if (action.range==="all"){
                return g
            }
            let milestones =action.range.split('_');
            let floor =Number(milestones[0]);
            let ceil =Number(milestones[1]);
            return g.price >= floor && g.price <=ceil;
          })
        yield put({
            type: FILTER_GROUNDS_SUCCESS,
            grounds: filteredGrounds,
            price:action.range
        });
     }
    catch (error) {
         yield put({ type:FILTER_GROUNDS_ERROR, error: error});
    }
}

// Name sort 
export function* NameSort(action) {
    try{
        yield put({
            type: NAME_SORT_SUCCESS,
            value:action.value
        });
     }
    catch (error) {
         yield put({ type:NAME_SORT_ERROR, error: error});
    }
}

// Price sort 
export function* PriceSort(action) {
    try{
        yield put({
            type: PRICE_SORT_SUCCESS,
            value:action.value
        });
     }
    catch (error) {
         yield put({ type:PRICE_SORT_ERROR, error: error});
    }
}

// Get single ground
export function* GetSingleGround(action) {
    try{
        let findedGround=  initalListGrounds.find(g=>{
            return(g.id==action.id)
        })
        yield put({
            type:GET_SINGLE_GROUND_SUCCESS, 
            ground:findedGround
        });
     }
    catch (error) {
         yield put({ type:GET_SINGLE_GROUND_ERROR, error: error});
    }
}

export function* rootSaga() {	 
    yield all([
        takeLatest(GET_GROUNDS, GetGrounds),
        takeLatest(SEARCH_GROUNDS,SearchGrounds),
        takeLatest(FILTER_GROUNDS,FilterGrounds),
        takeLatest(NAME_SORT,NameSort),
        takeLatest(PRICE_SORT,PriceSort),
        takeLatest(GET_SINGLE_GROUND,GetSingleGround)
    ]
    )
}