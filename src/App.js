import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [dateOfGraduation, setDateOfGraduation] = useState("");

  const [schools, setSchools] = useState("");

  const [workName, setWorkName] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [works] = useState("");

  return (
    <div className="App">
      <div className="cv-input">
        <h1>CV Input</h1>
      </div>
      <div className="cv-output">
        <h1>CV Output</h1>
      </div>
    </div>
  );
};

export default App;
