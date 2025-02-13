import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/AboutPage';
import ItemDetails from './pages/ItemDetails';
import NotFoundPage from './pages/NotFoundPage';
import foodData from './data/foodData.json';
import './index.css';

function App() {
  const [items, setItems] = useState(foodData);

  const handleUpdateItem = (updatedItem) => {   
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard items={items} setItems={setItems} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/item/:id" element={<ItemDetails items={items} setItems={setItems} onUpdateItem={handleUpdateItem} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
