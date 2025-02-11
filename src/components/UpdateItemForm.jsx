import React, { useState, useEffect } from "react";

const UpdateItemForm = ({ item, onUpdateItem }) => {
  const [name, setName] = useState(item.name);
  const [calories, setCalories] = useState(item.calories);

  useEffect(() => {
    setName(item.name);
    setCalories(item.calories);
  }, [item]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = { ...item, name, calories };
    onUpdateItem(updatedItem); 
  };

  return (
    <form className="update-item-form" onSubmit={handleSubmit}>
      <h3>Update Item</h3>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateItemForm;
