import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories] = useState(CATEGORIES);
  const [tasks, setTask] = useState(TASKS);
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')

  const itemsToDisplay = tasks.filter((item) => {
    if (selectedCategory === 'All') {
      return true
    };
    return item.category === selectedCategory;
  })

  const newItem = {
    text: text,
    category: category
  }

  function handleTaskDeleted(item) {
    setTask(tasks.filter((item) => item.text !== item))
  }

  function onTaskFormSubmit(event) {
    event.preventDefault()
    setTask([...tasks, newItem])
  }

  function handleTextChange(event) {
    setText(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm 
        categories={categories} 
        onTaskFormSubmit={onTaskFormSubmit} 
        onHandleTextChange={handleTextChange} 
        onHandleCategoryChange={handleCategoryChange}
        text={text}
        category={category} 
      />
      <TaskList itemDeleted={handleTaskDeleted} tasks={itemsToDisplay}/>
    </div>
  );
}

export default App;
