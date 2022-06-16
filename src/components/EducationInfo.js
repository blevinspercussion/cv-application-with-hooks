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
  //   handleSchoolDelete,
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

  const handleSchoolsChange = (e) => {
    handleSchools(e.target.value);
  };

  const handleSchoolSubmitChange = (e) => {
    console.log("clicked");
    handleSchoolSubmit(e);
    e.preventDefault();
  };

  return (
    <div className="component ed-comp">
      <h1>Education</h1>
      <form onSubmit={handleSchoolSubmitChange}>
        <label>School Name: </label>
        <input onChange={handleSchoolNameChange}></input>
        <br />
        <br />
        <label>Field of Study: </label>
        <input onChange={handleFieldOfStudyChange}></input>
        <br />
        <br />
        <label onChange={handleDateOfGraduationChange}>
          Date of Graduation:{" "}
        </label>
        <input type="date" onChange={handleDateOfGraduationChange}></input>
        <br />
        <br />
        <input className="btn" type="submit" value="Add School"></input>
      </form>
    </div>
  );
};

export default EducationInfo;
