import React from "react";
import { useParams } from "react-router-dom";
import foodData from "../data/foodData.json";

const ItemDetails = () => {
  const { id } = useParams();
  const item = foodData.find((item) => item.id === id);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="content">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} className="item-image" />
      <p><strong>Calories:</strong> {item.calories}</p>
      <p><strong>Servings:</strong> {item.servings}</p>
      <p><strong>Description:</strong> {item.description || "No description available"}</p>
    </div>
  );
};

export default ItemDetails;
