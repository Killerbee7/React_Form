import React from "react";
import "./form.css";

const Form = ({ submit, onChange}) => {
  return (
    <form onSubmit={submit}>
      <div className="form_container">
        <div className="input_area" onChange={onChange} >
          <div></div>
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" id="firstName" type="text" />
          <label htmlFor="lastName">Last Name:</label>
          <input name="lastName" id="lastName" type="text" />
          <label htmlFor="phone">Phone Number:</label>
          <input name="phone" type="tel" id="phone" />
          <label htmlFor="role">Role:</label>
          <select name="role" id="role">
          <option disabled value="">Select a role:</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Others">Others</option>
          </select>
          <label htmlFor="textarea">Your message:</label>
          <textarea name="message" id="textarea" rows="10"></textarea>
        </div>
        <div className="btn">
          <button className="button-73" type="submit"  >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
