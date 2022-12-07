import { BrowserRouter, Router, Routes, Navigate } from "react-router-dom";

// Import of components
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

// Import of styling
import "./App.scss";

function App() {
  return (
    <div className="App">
      <About />
      <Footer />
    </div>
  );
}

export default App;
