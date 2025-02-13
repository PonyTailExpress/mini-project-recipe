import React, { useState } from 'react';
import FoodList from '../components/FoodList';
import AddItemForm from '../components/AddItemForm';

const Dashboard = ({items}) => {


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
