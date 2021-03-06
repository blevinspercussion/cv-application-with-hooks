import React from "react";
import "./component_styles.css";

const GeneralInfo = ({
  fullName,
  email,
  phone,
  handleName,
  handleEmail,
  handlePhone,
}) => {
  const handleNameChange = (e) => {
    handleName(e.target.value);
  };
  const handleEmailChange = (e) => {
    handleEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    handlePhone(e.target.value);
  };

  return (
    <div className="component gen-info-comp">
      <form>
        <h1>General Information</h1>
        <label>Name: </label>
        <input onChange={handleNameChange}></input>
        <br />
        <br />
        <label>Email: </label>
        <input type="email" onChange={handleEmailChange}></input>
        <br />
        <br />
        <label>Phone: </label>
        <input type="phone" onChange={handlePhoneChange}></input>
        <br />
        <br />
      </form>
      <h3>{fullName}</h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>
    </div>
  );
};

export default GeneralInfo;
