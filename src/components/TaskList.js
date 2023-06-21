import React from "react";
import Task from "./Task";

function TaskList({ itemDeleted, tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
      <Task key={index} text={task.text} category={task.category} itemDeleted={itemDeleted} />
      ))}
    </div>
  );
}

export default TaskList;
