import { createStore } from "redux";
import counterReducer from "./reducers/CounterReducer";

const store=createStore(counterReducer)

export default store;