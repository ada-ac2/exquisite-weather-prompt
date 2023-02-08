import React, { useState } from "react";
import "./AddLineForm.css";

const kDefaultFormState = {
  adjective: "",
  noun: "",
  adverb: "",
  verb: "",
};

const AddLineForm = ({ onNewLineReady }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = {
      ...formData,
      [fieldName]: fieldValue,
    };

    setFormData(newFormData);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    onNewLineReady(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <section className="form-holder--block">
      <h2>Add a new line</h2>
      <div className="form--inline">
        <p>The </p>
        <form className="form--inline" onSubmit={formSubmit}>
          <div>
            <input
              type="text"
              name="adjective"
              placeholder="adjective"
              value={formData.adjective}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="noun"
              placeholder="noun"
              value={formData.noun}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="adverb"
              placeholder="adverb"
              value={formData.adverb}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="verb"
              placeholder="verb"
              value={formData.verb}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <input type="submit" value="Submit Line"></input>
          </div>
        </form>
        <p>.</p>
      </div>
    </section>
  );
};

export default AddLineForm;
