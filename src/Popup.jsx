import React from "react";
import "./popup.css"

const Popup = (props) => {
    return(
        <div className="popup">
            <div className="input_result">
            <p>First Name: {props.f_name}</p>
            <p>Last Name: {props.l_name}</p>
            <p>Phone Number: {props.p_number}</p>
            <p>Role: {props.role}</p>
            <p>Message: {props.message}</p>
            </div>
            <div>
                <button className="primary" onClick={props.hidePopup}>Send</button>
                <button className="secondary" onClick={props.hidePopup}>Send</button>
            </div>
        </div>
    )
}

export default Popup;