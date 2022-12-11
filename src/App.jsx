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
// Homepage components
import About from "./components/About/About";
import Types from "./components/Types/Types";
import Gallery from "./components/Gallery/Gallery";
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
          <Route path="/types" element={<Types />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book-now" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews/:id" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
