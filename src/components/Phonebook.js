import React, { useState } from "react";
import { IoPersonRemove } from "react-icons/io5";

function Phonebook() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    // let lastId = 0;
    // if (contacts.length) {
    //   lastId = contacts[contacts.length - 1].id;
    // }

    // let id = 1;
    // console.log(lastId);
    // if (lastId) {
    //   id = lastId + 1;
    // }
    let message = "";
    const contact = {
      id: new Date().getTime().toString(),
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
    };
    console.log("Contact", contact);
    if (lastName && firstName && mobile) {
      setContacts([...contacts, contact]);
      setFirstName("");
      setLastName("");
      setMobile("");
    } else {
      message = "Please fill all fields";
    }
  };

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
                setFirstName(e.target.value);
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
              setLastName(e.target.value);
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
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            name="mobile"
            className="form-control"
            id="contact"
            placeholder="Your contact number please"
            required
          />

          <div className="mb-3">
            <button
              className="btn btn-primary"
              style={{
                alignSelf: "center",
                marginTop: "3rem",
                display: "flexbox",
              }}
              type="submit"
              onClick={(e) => handleClick(e)}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="col-md-6 col-sm-10">
          <table
            className="table"
            style={{ marginTop: "10rem", marginLeft: "5rem" }}
          >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Conatct Number</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => {
                const { id, firstName, lastName, mobile } = contact;
                return (
                  <tr key={id}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{mobile}</td>
                    <td>
                      <IoPersonRemove />
                    </td>
                    {/* <td><IoPersonRemove/></td> */}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              {/* <h5>{message.length && message}</h5> */}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Phonebook;
