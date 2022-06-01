import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { useSelector, useDispatch } from 'react-redux';
import { AddNew, Delete, RemoveAll } from '../redux/actions/ToDoActions'
function TodoRedux() {
  const state = useSelector((state) => state.TodoRedux)
  const dispatch = useDispatch();
  const [task, setTask] = useState('')
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1 className="heading1">REDUX TODO APP</h1>
          <form className="form-control">
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={(e) => {

                e.preventDefault()
                setTask(e.target.value)
                //console.log("Task:", task);
              }}
            ></input>
            <button
              type="submit"
              className="btn btn-warning form-control"
              style={{ marginTop: "1rem" }}
              onClick={(e) => {
                e.preventDefault()
                dispatch(AddNew({ id: new Date().getTime().toString(), task: task }))
                setTask('')
                console.log(state);
              }}
            >

              ADD NEW TASK
            </button>
            <button
              type="submit"
              className="btn btn-danger form-control"
              style={{ marginTop: "1rem" }}
              onClick={(e) => {
                e.preventDefault()
                dispatch(RemoveAll())
              }}
            >

              REMOVE ALL
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h3 className="heading1">TODO LIST</h3>

          {state && state.map((item) => {
            return (
              <div className="input-group mb-3">
                <span onClick={(e) => {
                  e.preventDefault()
                  dispatch(Delete(item.id))
                }} className="input-group-text" style={{ cursor: "pointer" }} id="basic-addon3">
                  <TiDelete />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  disabled
                  placeholder={item.task}
                />
              </div>
            )
          })}



        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default TodoRedux