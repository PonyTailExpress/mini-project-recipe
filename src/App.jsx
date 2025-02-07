import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ItemDetails from "./components/ItemDetails";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <div className="main-container">
          <Sidebar />
          <div className="content">
            <h2>Welcome to The Recipe App</h2>
            <p>Explore delicious recipes from around the world!</p>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
