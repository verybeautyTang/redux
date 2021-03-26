import store from '../store';
// 导入常量 1是为了防止程序员处理错误 2是为了便于管理
import {INCREMENT, DECREMENT} from '../constant';
// 为count生成action对象
export const incrementFunc = (data:any) => ({
    type: INCREMENT,
    data
})
export const decrementFunc = (data:any) => ({
    type: DECREMENT,
    data
})
// 一般返回函数的就是异步调用的action 因为只有函数里面才能开启异步任务
export const incrementAsync = (data: any, time: number) => {
  return () => {
    // dispatch:这里的dispatch是store传送过来的
    setTimeout((dispatch) => {
      console.log(dispatch);
      store.dispatch(incrementFunc(data)) // 可以用同步的数据
    }, time);
  }
}