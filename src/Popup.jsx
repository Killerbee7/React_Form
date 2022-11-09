import React from "react";
import "./popup.css";

const Popup = (props) => {
  return (
    <div className="popup">
        <h1>Your Note</h1>
      <div className="input_result">
        
        <div id="para">
            <p>First Name: <span>{props.f_name}</span></p>
            <p>Last Name: <span>{props.l_name}</span></p>
            <p>Phone Number: <span>{props.p_number}</span></p>
            <p>Role: <span>{props.role}</span></p>
            <p>Message: <span>{props.message}</span></p>
        </div>
        
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
