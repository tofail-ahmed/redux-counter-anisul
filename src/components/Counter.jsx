import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { INCREMENT } from "../constants/CounterContant"
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/CouterAction"

const Counter = () => {
     const count=useSelector(state=>state.count)
     const dispatch=useDispatch()
//      console.log(count)
      
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
      <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
      <button onClick={()=>dispatch(resetCounter())}>Reset</button>
    </div>
  )
}

export default Counter