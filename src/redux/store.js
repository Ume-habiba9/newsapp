import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { RootReducer } from "./reducers";
import { mySaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension"


export const SagaMiddleware = createSagaMiddleware();
export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(SagaMiddleware)));
SagaMiddleware.run(mySaga);