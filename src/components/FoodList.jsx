import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foodData from "../data/foodData.json";

const FoodList = () => {
  const [items, setItems] = useState(foodData);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="food-list">
      {/* Render each item */}
      {items.map((item) => (
        <div key={item.id} className="food-list-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <p>{item.name}</p>
          <p>{item.calories} calories</p>

          {/* Delete button */}
          <button onClick={() => handleDelete(item.id)} className="delete-btn">
            Delete
          </button>

          {/* Update button that navigates to ItemDetails page */}
          <button
            onClick={() => navigate(`/item/${item.id}`)}
            className="update-btn"
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
