import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import firebase from "../utils/firebase";

const Contacts = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState('');

  /**
   * @author Yash Karanke
   * @description Fetching all the `Object`s from the database i.e. referenced
   */
  useEffect(() => {
    // Getting the data from firebase
	const firebaseRef = firebase.database().ref("Contacts");
	
    firebaseRef.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
    document.title = `Contact Book v2020`;
  }, []);

  /**
   * @author Yash Karanke
   * @param {Object} obj : Object
   * @description Creates a database, if does not exists, and inserts the `Object` into the database
   */
  const addOrEdit = (obj) => {
    const ContactRef = firebase.database().ref("Contacts");
    return ContactRef.push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...({ addOrEdit, currentId, contactObjects })} />
        </div>
        <div className="col-md-7">
          <table className="table table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                {/* <th>Date</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].fullname}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].email}</td>
                    {/* <td>{contactObjects[id].currentDate}</td> */}
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {setCurrentId(id)}}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a className="btn text-danger">
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Contacts;
