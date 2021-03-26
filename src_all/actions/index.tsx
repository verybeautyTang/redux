import { INCREMENT, DECREMENT } from '../constants';
export interface INCREMENTaction {
  type: INCREMENT
}
export interface DECREMENaction {
  type: DECREMENT
}

// 定义一个增减合计
export type ModifyAction = INCREMENTaction | DECREMENaction

// 增加state次数的方法

export const increment =() :ModifyAction => ({
  type: INCREMENT
})
// 减少state次数的方法
export const decrement =() :ModifyAction => ({
  type: DECREMENT
})