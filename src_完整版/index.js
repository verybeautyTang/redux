import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { createStore } from 'redux'
import './index.css';
import App from './App';
import reducer from './reducer'
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
// 创建store
const stores = createStore(reducer)
ReactDOM.render(
    <Provider store = { stores }>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
// 将redux的读取放到index页面， 就不用每个组件都去写更新了，订阅状态
store.subscribe( () => {
  ReactDOM.render(
    <Provider store = { store }>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
