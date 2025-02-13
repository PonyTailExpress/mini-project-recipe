import React, { useState, useEffect } from "react";

const UpdateItemForm = ({ item, onUpdateItem }) => {
  const [name, setName] = useState(item.name || ""); 
  const [calories, setCalories] = useState(item.calories || ""); 

  useEffect(() => {
    if (item) {
      setName(item.name);
      setCalories(item.calories);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      name,
      calories: Number(calories),
    };
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
          required
        />
      </div>
      <div>
        <label>Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateItemForm;
