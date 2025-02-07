import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard"; 
import AboutPage from "./pages/AboutPage";
import ItemDetails from "./pages/ItemDetails"; 
import NotFoundPage from "./pages/NotFoundPage"; 

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="main-container">
          <Sidebar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/item/:id" element={<ItemDetails />} />
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
