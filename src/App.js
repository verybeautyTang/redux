/*
 * @Author: your name
 * @Date: 2021-03-19 09:36:22
 * @LastEditTime: 2021-03-26 16:11:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\App.js
 */
// import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
// import Counter from "./Components/Counter";
// 引入container组件
function App() {
  return (
    <div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Button type="primary">Welcome</Button>
        <p>
          Company
        </p>
      </header>
    </div>
  );
}

export default App;
