// import of dependencies
import {
  BrowserRouter,
  Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

// Import of Pages
import Home from "./Pages/Home/Home";

// Import of components
import About from "./components/About/About";
import Contact from "./components/Contact-Form/Contact";
import Footer from "./components/Footer/Footer";

// Import of styling
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
