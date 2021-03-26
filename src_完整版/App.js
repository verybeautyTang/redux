// import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
// import Counter from "./Components/Counter";
// 引入container组件
import ConterCon from "./container/ConterCon";
import Count from  "./components/Count"
function App() {
  return (
    <div>
      <Count />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Button type="primary">Welcome</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
        <ConterCon />
      </header>
    </div>
  );
}

export default App;
