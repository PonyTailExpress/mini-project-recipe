import React, { useState, useEffect } from 'react';
import './AddItemForm.css';

const AddItemForm = ({ onAddItem, onUpdateItem, item }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setCalories(item.calories);
      setImage(item.image);
      setIsEditing(true);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !calories || !image) {
      alert('Please fill in all fields.');
      return;
    }

    const newItem = {
      id: isEditing ? item.id : Math.random().toString(36).substr(2, 9),
      name,
      calories: parseInt(calories),
      image,
      servings: 1,
    };

    if (isEditing) {
      onUpdateItem(newItem);
    } else {
      onAddItem(newItem);
    }

    setName('');
    setCalories('');
    setImage('');
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <h3>{isEditing ? 'Update Recipe' : 'Add New Recipe'}</h3>
      
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipe name"
        />
      </div>
      
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories"
        />
      </div>
      
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
      </div>
      
      <button type="submit">{isEditing ? 'Update Item' : 'Add Item'}</button>
    </form>
  );
};

export default AddItemForm;
