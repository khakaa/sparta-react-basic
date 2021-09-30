// 준비물: 리듀서
import { createStore, combineReducers } from "redux";
import quiz from "./modules/quiz";
import ranking from "./modules/ranking";

const rootReducer = combineReducers({ quiz, ranking });
const store = createStore(rootReducer);

export default store;
