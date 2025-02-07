import React, { useState } from "react";
import foodData from "../data/foodData.json";

const ListItem = ({ item, onDelete }) => {
  return (
    <div className="food-list-item border p-4 rounded-lg shadow-md">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="flex-1 mt-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p>Calories: {item.calories} {item.calories <= 300 ? "✅" : "❌"}</p>
      </div>
      <button 
        onClick={() => onDelete(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 mt-4"
      >
        Delete
      </button>
    </div>
  );
};

const FoodList = () => {
  const [items, setItems] = useState(foodData);

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="food-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {items.map(item => (
        <ListItem key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FoodList;
