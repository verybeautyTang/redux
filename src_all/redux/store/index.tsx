// 该文件专门用于暴露一个store对象 整个应用只有一个store对象

// createStore:专门用于创建store的方法
// applyMiddlewarey用于专门处理中间件
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk"; // 用于action异步调用的返回的函数,因为store只能接收一个object作为返回值
import countReducer from '../reducer/countReducer';

export default  createStore(countReducer,applyMiddleware(thunk))