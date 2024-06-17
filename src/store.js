// import {createStore, applyMiddleware} from 'redux';
// import thunk from "redux-thunk";
// import {routerMiddleware} from 'react-router-redux';
// import history from './history';
// import reducer from './Reducers'
// import {loadState, saveState} from "./localstorage";
// import throttle from "lodash/throttle";
//
//
// const persistedStore = loadState();
//
// const enhancer = applyMiddleware(thunk, routerMiddleware(history));
// const store = createStore(reducer, persistedStore, enhancer);
//
// store.subscribe(throttle(() => {
//    saveState(store.getState());
// }, 1000));
//
// //dev only
// window.store = store;
//
// export default store;



import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './Reducers'; // Убедитесь, что у вас есть корневой редюсер
import { loadState, saveState } from "./localstorage";
import throttle from "lodash/throttle";

export const history = createBrowserHistory();

const persistedStore = loadState();

const rootReducer = createRootReducer(history); // Создание корневого редюсера с подключенным роутером
const enhancer = composeWithDevTools(
    applyMiddleware(
        thunk,
        routerMiddleware(history) // Интеграция истории роутера с redux
    )
);

const store = createStore(rootReducer, persistedStore, enhancer);

store.subscribe(throttle(() => {
   saveState(store.getState());
}, 1000));

// dev only
window.store = store;

export default store;
