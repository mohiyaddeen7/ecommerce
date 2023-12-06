import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tshirts from "./Tshirts";
import Hoodies from "./Hoodies";
import Mugs from "./Mugs";
import Stickers from "./Stickers";
import CartState from "./context_useContext/cartContext/CartState";
import ProductPage from "./Products/ProductPage";
import Checkout from "./Checkout";
import Order from "./Order";
import Login from "./Login";
import PhoneVerification from "./PhoneVerification";
import Signup from "./Signup";
import Otp_page from "./Otp_page";

function App() {
  return (
    <Router>
      <CartState>
        <Nav />
        <Routes>
          <Route exact path={"/"} element={<Home />}></Route>
          <Route exact path={"/Tshirts"} element={<Tshirts />}></Route>
          <Route exact path={"/Hoodies"} element={<Hoodies />}></Route>
          <Route exact path={"/Mugs"} element={<Mugs />}></Route>
          <Route exact path={"/Stickers"} element={<Stickers />}></Route>
          <Route exact path={"/Checkout"} element={<Checkout />}></Route>
          <Route exact path={"/Order"} element={<Order />}></Route>
          <Route exact path={"/Login"} element={<Login />}></Route>
          <Route
            exact
            path={"/PhoneVerification"}
            element={<PhoneVerification />}
          ></Route>
          <Route exact path={"/Signup"} element={<Signup />}></Route>
          <Route exact path={"/Otp"} element={<Otp_page />}></Route>
          <Route
            path={"/ProductPage/:itemCode"}
            element={<ProductPage />}
          ></Route>
        </Routes>
        <Footer />
      </CartState>
    </Router>
  );
}

export default App;
