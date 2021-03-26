import * as React from "react";
import { Button } from 'antd';
export interface Iprop {
  value: number,
  onIncrement : () => void,
  onDecrement : () => void
}
export default class Counter extends React.PureComponent<Iprop> {
  public render () {
    const  { value, onIncrement, onDecrement } = this.props
    return  (
      <p>
        Clicked: {value} times
        <br />
        <br />
        <Button type="primary" onClick={onIncrement}>+</Button>
        Clicked: {value} times
        <Button type="default" onClick ={onDecrement}>-</Button>
      </p>
    )
  }
}