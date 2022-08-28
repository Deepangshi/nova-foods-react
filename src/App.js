import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Brands from "./Components/Pages/Brands";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/brands" element={<Brands />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contactus" element={<ContactUs />} />

          <Route path="*" element={<h1>Error 404 Page not found!!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
