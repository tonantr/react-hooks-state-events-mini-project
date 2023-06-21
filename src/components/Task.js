import React from "react";

function Task({text, category, itemDeleted}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => itemDeleted(text)}>X</button>
    </div>
  );
}

export default Task;
