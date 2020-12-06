import React, {useEffect} from 'react'
import ContactForm from "./ContactForm";
import firebase from "../utils/firebase";

const Contacts = () => {
	
	/**
	 * @author Yash Karanke
	 * @description Fetching all the `Object`s from the database i.e. referenced
	 */
	useEffect(()=>{
        // eslint-disable-next-line no-unused-vars
        const firebaseRef = firebase.database().ref("Contacts");        
	});

	/**
	 * @author Yash Karanke
	 * @param {Object} obj : Object
	 * @description Creates a database, if does not exists, and inserts the `Object` into the database
	 */
    const addOrEdit = obj => {
        const ContactRef = firebase.database().ref("Contacts");
        ContactRef.push(obj);
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
                    <ContactForm addOrEdit={addOrEdit}/>
                </div>
                <div className="col-md-7">
                    <div>
						<h1>List of contacts</h1>
					</div>
                </div>
            </div>
        </>
    )
}
export default Contacts;