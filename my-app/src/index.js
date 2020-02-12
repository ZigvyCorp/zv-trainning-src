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
import {rootSaga} from './sagas/grounds'
import { composeWithDevTools } from 'redux-devtools-extension';

//Middleware
const sagaMiddleware=createSagaMiddleware();

// Store
let store =createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();

