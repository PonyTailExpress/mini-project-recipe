import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Sidebar & Main Content Container */}
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <h2>Welcome to The Recipe App</h2>
          <p>Explore delicious recipes from around the world!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App
