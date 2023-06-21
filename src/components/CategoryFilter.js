import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button className={selectedCategory === category ? 'selected' : ''} key={index} onClick={() => setSelectedCategory(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
