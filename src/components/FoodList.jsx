import React, { useState } from "react";
import foodData from "../data/foodData.json";

const ListItem = ({ item, onDelete }) => {
  return (
    <div className="border p-4 flex items-center gap-4 rounded-lg shadow-md">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p>Calories: {item.calories} {item.calories <= 300 ? "✅" : "❌"}</p>
      </div>
      <button 
        onClick={() => onDelete(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

const FoodList = () => {
  const [items, setItems] = useState(foodData); // Use imported data

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="p-4 space-y-4">
      {items.map(item => (
        <ListItem key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FoodList;