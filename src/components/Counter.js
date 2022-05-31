import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, divide, multiply } from '../redux/actions/Actions'
function Counter() {
  const dispatch = useDispatch();
  const state = useSelector((state) =>
    state.changeNumber
  )
  const state2 = useSelector((state) =>
    state.calculateNumber
  )
  return (
    <div className="container">
      <h1 className="heading1" style={{ textAlign: "center" }}> My Redux Counter</h1>
      <div className="row">
        <div className="col-md-4 col-sm-10">

        </div>

        <div className="col-md-4 col-sm-10">
          <h1 style={{ fontSize: "100px", textAlign: "center" }}>{state}</h1>
          <h1 style={{ fontSize: "100px", textAlign: "center" }}>{state2}</h1>
          <div className="input-group mb-3 d-flex" >
            <button type='button' className='btn btn-success' onClick={() => { dispatch(increment(5)) }} style={{ justifyContent: "space-between", marginLeft: "55px" }} >INCREMENT</button>
            <button type='button' className='btn btn-danger' onClick={() => { dispatch(decrement(5)) }}>DECREMENT</button>
          </div>
          <div className="input-group mb-3 d-flex" >
            <button type='button' className='btn btn-warning' onClick={() => { dispatch(divide(5)) }} style={{ justifyContent: "space-between", marginLeft: "55px" }} >DIVIDE</button>
            <button type='button' className='btn btn-primary' onClick={() => { dispatch(multiply(5)) }}>MULTIPLY</button>
          </div>

        </div>
        <div className="col-md-4 col-sm-10">

        </div>
      </div>
    </div >
  )
}

export default Counter