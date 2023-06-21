import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, onHandleTextChange, onHandleCategoryChange, text, category}) {

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={onHandleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={onHandleCategoryChange}>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
