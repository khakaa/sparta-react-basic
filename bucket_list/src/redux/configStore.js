import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import bucket from "./modules/bucket";

const middleWares = [thunk]; // 배열로 넣어주어야함
const rootReducer = combineReducers({ bucket }); // 리듀서를 묶어서 리듀서를 만듬
const enhancer = applyMiddleware(...middleWares); // 리듀서에 추가하는 옵션들의 모음

const store = createStore(rootReducer, enhancer); // 스토어 만듬

export default store;
