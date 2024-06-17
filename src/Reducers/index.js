// import {combineReducers} from 'redux'
// import {routerReducer} from 'react-router-redux'
// import bearer from "./bearer";
// import user from "./user";
// import tournamentsList from './tournamentsList';
// import teams from "./teams";
// import games from "./games";
// import rosters from "./rosters";
// import players from "./players";
// import logs from "./logs";
// import undoList from "./undoList";
// import viewLogs from "./viewLogs";
//
// export default combineReducers({
//     router: routerReducer,
//     bearer,
//     user,
//     tournamentsList,
//     teams,
//     games,
//     rosters,
//     players,
//     logs,
//     undoList,
//     viewLogs
// })



import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bearer from './bearer';
import user from './user';
import tournamentsList from './tournamentsList';
import teams from './teams';
import games from './games';
import rosters from './rosters';
import players from './players';
import logs from './logs';
import undoList from './undoList';
import viewLogs from './viewLogs';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    bearer,
    user,
    tournamentsList,
    teams,
    games,
    rosters,
    players,
    logs,
    undoList,
    viewLogs
});

export default createRootReducer;
