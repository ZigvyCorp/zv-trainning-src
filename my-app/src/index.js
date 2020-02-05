import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';

//Middleware
const sagaMiddleware=createSagaMiddleware();

let store =createStore(allReducers, applyMiddleware(sagaMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app

serviceWorker.unregister();

