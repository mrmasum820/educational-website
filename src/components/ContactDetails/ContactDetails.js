import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faAddressBook,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
// this variable is for showing contactDetails in contact page
const ContactDetails = () => {
  return (
    <div className="d-lg-flex justify-content-around align-items-center mt-3">
      <div className="d-flex align-items-center mx-4">
        <FontAwesomeIcon icon={faPhone} className="fs-1 me-2" />
        <div className="ms-2">
          <h3>Phone</h3>
          <p>Phone: +880-1683968910</p>
        </div>
      </div>
      <div className="d-flex align-items-center mx-4">
        <FontAwesomeIcon icon={faAddressBook} className="fs-1 me-2" />
        <div className="ms-2">
          <h3>Adress</h3>
          <p>Badda, Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="d-flex align-items-center mx-4">
        <FontAwesomeIcon icon={faVoicemail} className="fs-1 me-2" />
        <div className="ms-2">
          <h3>Email</h3>
          <p>Email: mrmasum820@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
