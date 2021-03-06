/*
 * @Author: your name
 * @Date: 2021-03-19 09:36:22
 * @LastEditTime: 2021-03-26 16:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\index.js
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
      </React.StrictMode>,
  document.getElementById('root')
);
// 将redux的读取放到index页面， 就不用每个组件都去写更新了，订阅状态
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
