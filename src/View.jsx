import React from "react";
import "./view.css";

const View = ({firstName, lastName, phone, role, message}) => {
    return(
    <div className="view">
        <h1>This is your input</h1>
        <p>First Name:<span id="firstName">{firstName}</span></p>
        <p>Last Name:<span id="lastName">{lastName}</span></p>
        <p>Phone Number:<span id="phone">{phone}</span></p>
        <p>Role:<span id="role">{role}</span></p>
        <p>Message:<span id="message">{message}</span></p>
        
    </div>
    )
}


export default View;