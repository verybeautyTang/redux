import { connect } from "react-redux";
import { Dispatch} from 'redux';
import {increment, decrement} from '../actions';
import Conter from '../components/Counter';
import {StoreState} from '../types';

// 将reducer的状态插入到组件的prop中
const mapStateProps = (state: StoreState) : { value:number } => ({
  value: state
})
const mapDispatchToProp = (dispatch: Dispatch) => ({
  onDecrement : () => dispatch(decrement()),
  onIncrement : () => dispatch(increment())
})

export default connect(mapStateProps, mapDispatchToProp)(Conter)
