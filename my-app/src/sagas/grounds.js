import { FILTER_GROUNDS ,FILTER_GROUNDS_SUCCESS,FILTER_GROUNDS_ERROR,
    SEARCH_GROUNDS,SEARCH_GROUNDS_SUCCESS,SEARCH_GROUNDS_ERROR 
    ,GET_GROUNDS,GET_GROUNDS_SUCCESS ,GET_GROUNDS_ERROR} from '../actions/styles';
import { put, takeLatest } from 'redux-saga/effects';

// Get grounds
export function* GetGrounds(action) {
    try{
        const ListGrounds= [];
        yield put({
            type: GET_GROUNDS_SUCCESS
        });
     }
    catch (error) {
         yield put({ type:GET_GROUNDS_ERROR, error: error});
    }
}

export function* WatchGetGrounds() {
    yield takeLatest(GET_GROUNDS,GetGrounds);
} 

// Search grouds
export function* SearchGrounds(action) {
    try{
        const ListGrounds= [];
        yield put({
            type: SEARCH_GROUNDS_SUCCESS,
            searchValue:action.searchValue
        });
     }
    catch (error) {
         yield put({ type:SEARCH_GROUNDS_ERROR, error: error});
    }
}

export function* WatchSearchGrounds() {
    yield takeLatest(SEARCH_GROUNDS,SearchGrounds);
} 

// sort grounds
export function* SortGrounds(action) {
    try{
        const ListGrounds= [];
        yield put({
            type: SEARCH_GROUNDS_SUCCESS,
            searchValue:action.searchValue
        });
     }
    catch (error) {
         yield put({ type:SEARCH_GROUNDS_ERROR, error: error});
    }
}

export function* WatchSearchGrounds() {
    yield takeLatest(SEARCH_GROUNDS,SearchGrounds);
} 

