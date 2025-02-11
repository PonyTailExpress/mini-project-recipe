import React, { useState } from 'react';
import FoodList from '../components/FoodList';
import AddItemForm from '../components/AddItemForm';

const Dashboard = () => {
  const [items, setItems] = useState([
    {
      id: "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
      name: "Pizza",
      calories: 400,
      image: "https://i.imgur.com/eTmWoAN.png",
      servings: 1,
    },
  ]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      
      {/* Pass handleUpdateItem and selectedItem to AddItemForm */}
      <AddItemForm onAddItem={handleAddItem} onUpdateItem={handleUpdateItem} />
      
      <FoodList items={items} />
    </div>
  );
};

export default Dashboard;
