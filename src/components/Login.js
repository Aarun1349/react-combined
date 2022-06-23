import React, { useState } from "react";
import arrow from "../images/arrow.jpg";
import ComponentModal from "./ComponentModal";
// import ComponentModal from "./ComponentModal";
function Login() {
  const email = "";
  const password = "";
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const showMessage = (message) => {
    alert(message);
  };
  const toggleModal = () => {
    setShow(!show);
  };
  const toggleModal2 = () => {
    setShow2(!show2);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-4 col-sm-10 " style={{ marginRight: "10rem" }}>
          <div
            className="mb-3"
            style={{ marginRight: "10rem", marginTop: "8rem" }}
          >
            <div className="card" style={{ width: "32rem" }}>
              <img src={arrow} className="card-img-top" alt={arrow} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-10">
          <div className="mb-3" style={{ marginTop: "10rem" }}>
            <h1 className="heading1"> SIGN IN</h1>
            <label htmlFor="emailId" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                console.log(e);
              }}
              name="email"
              className="form-control"
              id="email"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => {
                console.log(e);
              }}
              type="password"
              placeholder="password"
              required
            ></input>
            <button
              className="btn btn-primary"
              style={{
                alignSelf: "center",
                marginTop: "3rem",
                display: "flexbox",
              }}
              type="submit"
            >
              LOGIN
            </button>
            <button
              className="btn btn-primary"
              style={{
                alignSelf: "center",
                marginTop: "3rem",
                marginLeft: "3rem",
                display: "flexbox",
              }}
              type="submit"
              onClick={toggleModal}
            >
              Modal
            </button>
            <button
              className="btn btn-secondary"
              style={{
                alignSelf: "center",
                marginTop: "3rem",
                marginLeft: "3rem",
                display: "flexbox",
              }}
              onClick={toggleModal2}
            >
              Modal2
            </button>
          </div>
        </div>
      </div>
      <ComponentModal
        show={show}
        toggleModal={toggleModal}
        message={"immortal"}
        showMessage={showMessage}
      />
      <ComponentModal
        show={show2}
        toggleModal={toggleModal2}
        message={"My eternity is unquestionable"}
        showMessage={showMessage}
      />
    </div>
  );
}

export default Login;
