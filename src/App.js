import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Tshirts from "./Tshirts";
import Hoodies from "./Hoodies";
import Mugs from "./Mugs";
import Stickers from "./Stickers";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path={"/"} element={<Home></Home>}></Route>
        <Route exact path={"/Tshirts"} element={<Tshirts></Tshirts>}></Route>
        <Route exact path={"/Hoodies"} element={<Hoodies></Hoodies>}></Route>
        <Route exact path={"/Mugs"} element={<Mugs></Mugs>}></Route>
        <Route exact path={"/Stickers"} element={<Stickers></Stickers>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
