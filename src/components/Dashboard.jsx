import React from "react";
import List from "./FoodList";

const Dashboard = () => {
  return (
    <div className="content">
      <h2>Dashboard</h2>
      <p>Explore your favorite recipes below:</p>
      <List />
    </div>
  );
};

export default Dashboard;
