import React from 'react'

function Counter() {
  return (
    <div className="container">
        <h1 className="heading1" style={{textAlign:"center"}}> My Redux Counter</h1>
        <div className="row">
          <div className="col-md-4 col-sm-10">
            
          </div>
          
          <div className="col-md-4 col-sm-10">
            <h1 style={{fontSize:"100px",textAlign:"center"}}>0</h1>
            <div className="input-group mb-3"style={{marginRight:"5rem"}} >
              <button type='button' className='btn btn-success' >INCREMENT</button>
              <button type='button' className='btn btn-danger'>DECREMENT</button>
            </div>
           
          </div>
          <div className="col-md-4 col-sm-10">
            
          </div>
        </div>
      </div>
  )
}

export default Counter