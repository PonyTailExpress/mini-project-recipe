import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import foodData from "../data/foodData.json";
import UpdateItemForm from "../components/UpdateItemForm";

const ItemDetails = ({ onUpdateItem }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = foodData.find((item) => item.id === id);
    if (foundItem) {
      setItem(foundItem);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  const handleUpdateItem = (updatedItem) => {
    onUpdateItem(updatedItem);
    navigate("/"); 
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="item-details">
      <h2>Item Details</h2>
      <img src={item.image} alt={item.name} className="item-image" />
      <p>Name: {item.name}</p>
      <p>Calories: {item.calories}</p>


      <UpdateItemForm item={item} onUpdateItem={handleUpdateItem} />
    </div>
  );
};

export default ItemDetails;
