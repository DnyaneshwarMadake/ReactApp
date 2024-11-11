import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handlermsClick = () => {
    let newText = text.split(" ").join("");
    setText(newText);
  };

  const handleremoveSpecialcharClick = () => {
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, "");
    setText(newText);
  };

  const handleCountNumClick = () => {
    let numbers = text.match(/\d/g);
    let count = numbers ? numbers.length : 0;
    setText(count);
  };

  const handleClearTextClick = () => {
    let newtext = text;
    newtext = "";
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="from-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            cols="150"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpClick}>
          Convert To Upercase
        </button>
        <button className="btn btn-primary me-3" onClick={handleloClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary me-3" onClick={handlermsClick}>
          Remove the Spaces
        </button>

        <button
          className="btn btn-primary me-3"
          onClick={handleremoveSpecialcharClick}
        >
          Remove the Special char in string
        </button>
        <button className="btn btn-primary me-3" onClick={handleCountNumClick}>
          Count the Number
        </button>
        <button className="btn btn-primary me-3" onClick={handleClearTextClick}>
          Clear the Textarea
        </button>
      </div>
      <div className="container my-3">
        <h4>Your text Summary: </h4>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h4>Preview </h4>
        <p>{text}</p>
      </div>
    </>
  );
}
