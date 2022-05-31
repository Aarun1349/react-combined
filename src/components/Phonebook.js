import React from "react";
import {IoPersonRemove} from 'react-icons/io5'

function Phonebook() {
  const firstName = "";
  const lastName = "";
  const contact = "";
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6 col-sm-10">
          <div className="mb-3" style={{ marginTop: "10rem" }}>
            <h1 className="heading1"> ADD NEW CONTACT</h1>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                console.log(e);
              }}
              name="firstName"
              className="form-control"
              id="firstName"
              placeholder="Your first name please"
              required
            />
          </div>

          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              console.log(e);
            }}
            name="lastName"
            className="form-control"
            id="lastName"
            placeholder="Your last name please"
            required
          />

          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => {
              console.log(e);
            }}
            name="contact"
            className="form-control"
            id="contact"
            placeholder="Your contact number please"
            required
          />

          <div className="mb-3">
            <button
              class="btn btn-primary"
              style={{
                alignSelf: "center",
                marginTop: "3rem",
                display: "flexbox",
              }}
              type="submit"
            >
              ADD
            </button>
          </div>
        </div>
        <div className="col-md-6 col-sm-10">

          <table className="table" style={{ marginTop: "10rem", marginLeft:"5rem" }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Conatct Number</th>
                <th>REMOVE</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Conatct Number</td>
                <td><IoPersonRemove/></td>
                {/* <td><IoPersonRemove/></td> */}
              </tr>
              </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default Phonebook;
