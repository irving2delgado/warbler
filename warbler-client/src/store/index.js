import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "../../node_modules/redux";
import rootReducer from "./reducers";

export function  configureStore() {
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? windows.devToolsExtension() : f =>
        )
    );
    return store;
}