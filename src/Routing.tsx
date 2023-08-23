import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/About';
import Cart from './Pages/Cart';
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
export default function Routing() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home />}></Route>
            {/* <Route index element={<Home/>}></Route> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }