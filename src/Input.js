import React, { useState } from "react";
import "./InputStyle.css";

let marked = require("marked");

const Input = () => {
  const [markdown, setMarkdown] = useState("");

  function updateMarkdown(inputValue) {
    setMarkdown(inputValue);
  }
  function onClickHandler() {
    setMarkdown("");
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-main">Markdown</h1>{" "}
        <p className="header-p">previewer</p>
      </div>
      <div className="wrapper">
        <div className="input-area">
          <h1 className="title">Type code to preview</h1>
          <textarea
            className="input"
            placeholder="# H1     
          ## H2     
          ### H3"
            value={markdown}
            onChange={(e) => {
              updateMarkdown(e.target.value);
            }}
          >
            {" "}
            {console.log(markdown)}
          </textarea>
        </div>

        <div className="preview-container">
          {" "}
          <h1 className="title">Markdown Output</h1>
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
      <button className="reset-btn" onClick={onClickHandler}>
        Reset
      </button>
    </div>
  );
};

export default Input;
