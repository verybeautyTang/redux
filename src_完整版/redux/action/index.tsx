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