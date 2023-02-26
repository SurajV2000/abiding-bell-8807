import { Route, Router, Routes } from "react-router-dom";
import Appliance from "../../Pages/Appliance";
import Electrician from "../../Pages/Electrician";
import Home from "../../Pages/Home";
import Men from "../../Pages/Men";
import NotFound from "../../Pages/NotFound";
import SingleProduct from "../../Pages/SingleProduct";
import Women from "../../Pages/Women";
import LoginPage from "../../Pages/loginPage";
import Private from "../../Pages/Private";
import Cart from "../../Pages/Cart";
import Check from "../../Pages/Check";
import Admin from "../../Pages/Admin";

export default function AllRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="women" element={<Women />}></Route>
        <Route
          path="men"
          element={
            <Private>
              <Men />
            </Private>
          }
        ></Route>
        <Route path="electrician" element={<Electrician />}></Route>
        <Route path="appliance" element={<Appliance />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="men/:id" element={<SingleProduct />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="cart" element={<Cart/>} ></Route>
        <Route path="checkout" element={<Check/>}></Route>
        <Route path="admin" element={<Admin/>}></Route>
      </Routes>
    </>
  );
}
