import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Services from "./pages/Services";
import Download from "./pages/Download";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import ERP from "./pages/product/ERP";
import Billing from "./pages/product/Billing";
import MockTest from "./pages/product/MockTest";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/services" element={<Services />} />*/}
        <Route path="/products" element={<Products />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/erp" element={<ERP />} />
        <Route path="/products/billing" element={<Billing />} />
        <Route path="/products/mocktest" element={<MockTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;