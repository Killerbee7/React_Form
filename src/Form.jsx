import React from "react";
import "./form.css";

const Form = (props) => {
  return (
    <form>
      <div className="form_container">
        <div className="input_area" onChange={props.onChange} onSubmit={props.submit}>
          
          <label htmlFor="f_name">First Name:</label>
          <input name="f_name" id="f_name" type="text" />
          <label htmlFor="l_name">Last Name:</label>
          <input name="l_name" id="l_name" type="text" />
          <label htmlFor="p_number">Phone Number:</label>
          <input name="p_number" type="tel" id="p_number" />
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
          <button className="button-73" type="submit" onClick={props.submit} >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
