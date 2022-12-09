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
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact-Form/Contact";
import Footer from "./components/Footer/Footer";

// Import of styling
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-now" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
