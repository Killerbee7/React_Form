import React from "react";
import "./view.css";

const View = (props) => {
    return(
    <div className="view">
        <p>First Name:<span id="f_name">{props.f_name}</span></p>
        <p>Last Name:<span id="l_name">{props.l_name}</span></p>
        <p>Phone Number:<span id="p_number">{props.p_number}</span></p>
        <p>Role:<span id="role">{props.role}</span></p>
        <p>Message:<span id="message">{props.message}</span></p>
        
    </div>
    )
}


export default View;