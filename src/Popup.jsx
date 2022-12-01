import React from "react";
import "./popup.css";

const Popup = ({firstName, lastName, phone, role, message, hidePopup,  post}) => {
  return (
    <div className="popup">
        <h1>Your Note</h1>
      <div className="input_result">
        
        <div id="para">
            <p>First Name: <span>{firstName}</span></p>
            <p>Last Name: <span>{lastName}</span></p>
            <p>Phone Number: <span>{phone}</span></p>
            <p>Role: <span>{role}</span></p>
            <p>Message: <span>{message}</span></p>
        </div>
        
      </div>
      <div>
        <button className="button-73" onClick={post}>
          Send
        </button>
        <button className="button-73" onClick={hidePopup}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Popup;
