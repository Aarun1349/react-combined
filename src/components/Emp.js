import React from 'react'
import { Link } from "react-router-dom"
import signinImage from '../images/signin.jpg'
import '../emp/empStyle.css'
function Emp() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-lg-6 col-md-6'>
                    <img src={signinImage} style={{ height: "500px", width: "500px" }} className=' mx-auto rounded float-start img-fluid ms-5 mt-5' alt="random"></img>
                </div>
                <div className='col-12 col-lg-6 col-md-6'>
                    <form className='form form-group  emp-form'>
                        <h2 className='text-center  text-uppercase mx-5'>Sign In</h2>
                        <input className="form-control my-3" type="text" placeholder='Your contact email'></input>
                        <input className="form-control my-3 " type="password" placeholder='password'></input>
                        <button className=' form-control btn btn-primary'>Sign In</button>
                        <Link className=' form-control btn btn-secondary' to="/emp-signup" >Sign Up</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Emp