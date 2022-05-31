import React from "react";
import { Label } from "reactstrap";
import {TiDelete} from "react-icons/ti"
function Todo() {
  const task = "";
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1 className="heading1">TASKS</h1>
          <form className="form-control">
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={(e) => {
                console.log(e);
              }}
            ></input>
            <button
              type="submit"
              className="btn btn-warning form-control"
              style={{ marginTop: "1rem" }}
              onClick={(e) => {
                console.log(e);
              }}
            >
              
              ADD NEW TASK
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h3 className="heading1">TODO LIST</h3>
          <div className="input-group mb-3">
            <span onClick={console.log("clicked")} className="input-group-text"  style={{cursor:"pointer"}}id="basic-addon3">
              <TiDelete/>
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              disabled
              placeholder="task one"
            />
          </div>

         
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Todo;
