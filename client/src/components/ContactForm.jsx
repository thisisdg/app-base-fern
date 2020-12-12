import React, { useState } from "react";

const ContactForm = (props) => {

  const initialFieldValues = {
    fullname: "",
    mobile: "",
    email: "",
    address: "",
    currentDate: new Date().toUTCString().substr(0,16)
  };

  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (props.addOrEdit(values).path.pieces_[0] === "Contacts") {
      setValues(initialFieldValues);
    } else {
    }
  };
  return (
    <>
      <h1>Enter Contact Details</h1>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="fullname"
            placeholder="Full Name"
            value={values.fullname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>

            <input
              className="form-control"
              name="mobile"
              placeholder="Mobile"
              value={values.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <input
              className="form-control"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
          />

          <div className="form-group">
            <br />
            <input
              type="submit"
              value="Save"
              className="btn btn-primary btn-block"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
