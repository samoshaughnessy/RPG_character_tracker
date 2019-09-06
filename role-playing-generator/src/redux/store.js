import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./auth/reducer"
import logger from "redux-logger"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger), applyMiddleware(thunk))
);