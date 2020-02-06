import { FILTER_GROUNDS ,FILTER_GROUNDS_SUCCESS,FILTER_GROUNDS_ERROR,
    SEARCH_GROUNDS,SEARCH_GROUNDS_SUCCESS,SEARCH_GROUNDS_ERROR 
    ,GET_GROUNDS,GET_GROUNDS_SUCCESS ,GET_GROUNDS_ERROR
,SORT_GROUNDS,SORT_GROUNDS_SUCCESS,SORT_GROUNDS_ERROR,
NAME_SORT,NAME_SORT_SUCCESS,NAME_SORT_ERROR,PRICE_SORT,PRICE_SORT_SUCCESS,PRICE_SORT_ERROR
} from '../actions/styles';
import { put, takeLatest } from 'redux-saga/effects';
import {fiterPrice,sortGrounds} from '../utils/functions'


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

// Filter grounds
export function* FilterGrounds(action) {
    try{
        yield put({
            type: FILTER_GROUNDS_SUCCESS,
            price: action.range
        });
     }
    catch (error) {
         yield put({ type:FILTER_GROUNDS_ERROR, error: error});
    }
}

export function* WatchFilterGrounds() {
    yield takeLatest(FILTER_GROUNDS,FilterGrounds);
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

export function* WatchNameSort() {
    yield takeLatest(NAME_SORT,NameSort);
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

export function* WatchPriceSort() {
    yield takeLatest(PRICE_SORT,PriceSort);
} 

