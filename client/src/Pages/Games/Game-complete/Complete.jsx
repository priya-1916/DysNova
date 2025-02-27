import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Complete.css';

const Complete = () => {
  const [dataFinal, setData] = useState([]);
  const [field, setField] = useState([]);
  const [blank, setBlank] = useState(true);
  const [submit, setSubmit] = useState(false);

  const func = () => {
    setSubmit(true);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let gender = parseInt(e.target["gender"].value);
    let age = e.target["age"].value;
    let data = [[gender, age]];
    
    fetch("http://localhost:8080/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setBlank(false);
      });
  };

  return (
    <div className="complete-container">
      <form onSubmit={onFormSubmit} className="form">
        <div className="form-group">
          <label className="label">Gender</label>
          <select
            name="gender"
            value={field}
            onChange={(e) => setField([e.target.value])}
            className="select-box"
          >
            <option value="0">Female</option>
            <option value="1">Male</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">Age</label>
          <input type="number" name="age" className="input-box" />
        </div>

        <div className="button-container">
          <button type="submit" onClick={func} className="submit-button">Submit</button>
        </div>
      </form>

      {submit && (
        <div className="result">
          We predict based on our model that you are {dataFinal ? "not dyslexic" : "dyslexic"}
        </div>
      )}
    </div>
  );
};

export default Complete;