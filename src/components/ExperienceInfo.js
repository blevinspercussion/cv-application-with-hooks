import React from "react";
import "./component_styles.css";

const ExperienceInfo = (
  workName,
  position,
  tasks,
  startDate,
  endDate,
  handleWorkName,
  handlePosition,
  handleTasks,
  handleStartDate,
  handleEndDate,
  handleWorkSubmit,
  handleWorkDelete
) => {
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
    </div>
  );
};

export default ExperienceInfo;
