// 该文件专门用于暴露一个store对象 整个应用只有一个store对象

// createStore:专门用于创建store的方法
import { createStore } from "redux";
import countReducer from '../reducer/countReducer';

export default  createStore(countReducer)