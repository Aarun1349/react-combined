import React, { Component } from "react";
import "../styles/home.css";
import arrow from '../images/arrow.jpg'

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading1"> My Reactive Projects</h1>
        <div className="row">
          <div className="col-md-3 col-sm-10">
            <div className="card" style={{width: "18rem"}}>
              <img src={arrow} className="card-img-top" alt={arrow} />
              <div className="card-body">
                <p className="card-text">
                   Reactive Project One
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-10">
            <div className="card" style={{width: "18rem"}}>
              <img src={arrow} className="card-img-top" alt={arrow} />
              <div className="card-body">
                <p className="card-text">
                   Reactive Project Two
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-10">
            <div className="card" style={{width: "18rem"}}>
              <img src={arrow} className="card-img-top" alt={arrow} />
              <div className="card-body">
                <p className="card-text">
                   Reactive Project Three
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-10">
            <div className="card" style={{width: "18rem"}}>
              <img src={arrow} className="card-img-top" alt={arrow} />
              <div className="card-body">
                <p className="card-text">
                   Reactive Project Four
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
