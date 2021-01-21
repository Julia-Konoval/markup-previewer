import React, { useState } from "react";
import "./InputStyle.css";

let marked = require("marked");

const Input = () => {
  const [markdown, setMarkdown] = useState("");

  function updateMarkdown(inputValue) {
    setMarkdown(inputValue);
  }
  return (
    <div>
      <div className="input-area">
        <h1>Type code to preview</h1>
        <textarea
          className="input"
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
        <h1>Markdown Output</h1>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        ></div>
      </div>
    </div>
  );
};

export default Input;
