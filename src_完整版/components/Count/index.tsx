import * as React from 'react';
// 用于获取redux中保存得状态
import store from '../../redux/store'; 
// 引入action对象
import { incrementFunc, decrementFunc} from '../../redux/action';
export default class Count extends React.Component {
  componentDidMount () {
    // 检测redux中状态得变化，只要发生变化就调用render
    // store.subscribe
    // store.subscribe( () =>{
    //   // 其实有点问题的！
    //   this.setState({})
    // } )
  }
  addSome = () => {
    store.dispatch(incrementFunc(1))
  }
  desSome = () => {
    store.dispatch(decrementFunc(1))
  }
  addSomeOdd = () => {
    if (store.getState() % 2 == 1) {
      store.dispatch(incrementFunc(1))
    }
  }
  addSomeAsync = () => {
    setTimeout(() => {
      store.dispatch(incrementFunc(1))
    }, 500);
  }

  render () {
    return (
      <div>
        {/* getState():获取状态 */}
        <div>当前数目的累加是{store.getState()}</div> 
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick= {this.addSome }>+</button>
        <button  onClick= {this.desSome }>-</button>
        <button  onClick= {this.addSomeOdd }>奇数+</button>
        <button  onClick= {this.addSomeAsync }>异步+</button>
      </div>
    )
  }
}