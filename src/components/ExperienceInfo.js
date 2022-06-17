import React from "react";
import "./component_styles.css";

const ExperienceInfo = ({
  workName,
  position,
  tasks,
  startDate,
  endDate,
  work,
  works,
  handleWorkName,
  handlePosition,
  handleTasks,
  handleStartDate,
  handleEndDate,
  handleWorkSubmit,
  handleWorkDelete,
}) => {
  const handleWorkNameChange = (e) => {
    handleWorkName(e.target.value);
  };

  const handlePositionChange = (e) => {
    handlePosition(e.target.value);
  };

  const handleTasksChange = (e) => {
    handleTasks(e.target.value);
  };

  const handleStartDateChange = (e) => {
    handleStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    handleEndDate(e.target.value);
  };

  const handleWorkSubmitChange = (e) => {
    handleWorkSubmit(e);
    document.getElementById("exp-form").reset();
    e.preventDefault();
  };

  return (
    <div className="component exp-comp">
      <h1>Experience</h1>
      <form id="exp-form" onSubmit={handleWorkSubmitChange}>
        <label>Company Name: </label>
        <input
          type="text"
          required={true}
          onChange={handleWorkNameChange}
        ></input>
        <br />
        <br />
        <label>Position/Title: </label>
        <input
          type="text"
          required={true}
          onChange={handlePositionChange}
        ></input>
        <br />
        <br />
        <label>Tasks: </label>
        <textarea
          rows="5"
          required={true}
          onChange={handleTasksChange}
        ></textarea>
        <br />
        <br />
        <label>Start Date: </label>
        <input
          type="date"
          required={true}
          onChange={handleStartDateChange}
        ></input>
        <br />
        <br />
        <label>End Date: </label>
        <input
          type="date"
          required={true}
          onChange={handleEndDateChange}
        ></input>
        <br />
        <br />
        <input className="btn-submit" type="submit" value="Add Work"></input>
      </form>
      <ul>
        {works?.map((index) => (
          <li key={index.workName} value={index.workName}>
            <strong>{index.workName}</strong>
            <br />
            Position: {index.position}
            <br />
            Tasks: {index.tasks}
            <br />
            Start Date: {index.startDate}
            <br />
            End Date: {index.endDate}
            <div>
              <p onClick={() => handleWorkDelete(index.workName)}>(delete)</p>
            </div>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceInfo;
