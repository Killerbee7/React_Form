import React from "react";
import "./popup.css";

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="input_result">
        <h1>Your Note</h1>
        <p>First Name: {props.f_name}</p>
        <p>Last Name: {props.l_name}</p>
        <p>Phone Number: {props.p_number}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>
      </div>
      <div>
        <button className="button-73" onClick={props.hidePopup}>
          Send
        </button>
        <button className="button-73" onClick={props.hidePopup}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Popup;
