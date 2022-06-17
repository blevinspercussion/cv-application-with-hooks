import React from "react";
import "./component_styles.css";

const EducationInfo = ({
  schoolName,
  fieldOfStudy,
  dateOfGraduation,
  school,
  schools,
  handleSchoolName,
  handleFieldOfStudy,
  handleDateOfGraduation,
  handleSchools,
  handleSchoolSubmit,
  deleteSchool,
}) => {
  const handleSchoolNameChange = (e) => {
    handleSchoolName(e.target.value);
  };

  const handleFieldOfStudyChange = (e) => {
    handleFieldOfStudy(e.target.value);
  };

  const handleDateOfGraduationChange = (e) => {
    handleDateOfGraduation(e.target.value);
  };

  const handleSchoolSubmitChange = (e) => {
    handleSchoolSubmit(e);
    document.getElementById("ed-form").reset();
    e.preventDefault();
  };

  return (
    <div className="component ed-comp">
      <h1>Education</h1>
      <form id="ed-form" onSubmit={handleSchoolSubmitChange}>
        <label>School Name: </label>
        <input onChange={handleSchoolNameChange} required={true}></input>
        <br />
        <br />
        <label>Field of Study: </label>
        <input onChange={handleFieldOfStudyChange} required={true}></input>
        <br />
        <br />
        <label onChange={handleDateOfGraduationChange}>
          Date of Graduation:{" "}
        </label>
        <input
          type="date"
          onChange={handleDateOfGraduationChange}
          required={true}
        ></input>
        <br />
        <br />
        <input className="btn" type="submit" value="Add School"></input>
      </form>
      <ul>
        {schools?.map((index) => (
          <li key={index.schoolName} value={index.schoolName}>
            {index.schoolName} - {index.fieldOfStudy} - {index.dateOfGraduation}
            <div>
              <p onClick={() => deleteSchool(index.schoolName)}>(delete)</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationInfo;
