import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavbarPage from "./pages/NavbarPage";
import ProductPage from "./pages/ProductPage";
import OtpPage from "./pages/OtpPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <h1 className="text-center text-4xl text-purple-800"> Vite + React</h1>
      <BrowserRouter>
          <NavbarPage />
        <Routes>
          <Route path="/product" element={  <ProductPage />}/>
          <Route path="/login" element={<LoginPage />}/> 
          <Route path="/otp" element={<OtpPage />}/> 
          <Route path="/cart" element={<CartPage />}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
