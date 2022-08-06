///import "../Selecttext/inputtext.css";
import "./inputtext.css";
import React from "react";
function InputText(props) {
  return (
    <>
      <div className="form-group">
        <input
          type="password"
          className="inputFeild"
          id="password"
          name="password"
          // value={password}
          //onChange={passwordChangeHandler}
          //  onBlur={passwordBlurHandler}
          placeholder="Enter passwod"
        />
        {props.data}
      </div>
    </>
  );
}

export default InputText;
