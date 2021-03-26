import {INCREMENT, DECREMENT} from '../constant';
// 该文件是为count服务创建的组件，本身是一个函数
// 函数会接收到两个参数，一个是之前的数据，第二个是动作对象
function countReducer (pre: any, action:any) {
  console.log('pre',pre);
  // 判断是否为初始化状态看，如果是那个设置为0 
  if (pre == undefined) {
    console.log(pre);
    pre = 0
  }
  //从action对象中获取type data
  // 根据type获取如何加工数据
  const {type, data} = action
  switch (type) {
    case INCREMENT:
      return pre + data;
    case DECREMENT:
      return pre - data;
    default:
      return pre;
  }
};
export default countReducer;
