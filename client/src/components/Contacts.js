import React from 'react'
import ContactForm from "./ContactForm";
import fireDb from "../utils/firebase";

const Contacts = () => {
    const addOrEdit = obj => {
        fireDb.child("contacts").push(
            obj,
            err => {
                console.log(err);
            }
        )
    }


    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contact Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit}/>
                </div>
                <div className="col-md-7">
                    <div>list of contacts</div>
                </div>
            </div>
        </>
    )
}
export default Contacts;