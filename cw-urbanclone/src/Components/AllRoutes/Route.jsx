import { Route, Routes } from "react-router-dom";
import Appliance from "../../Pages/Appliance";
import Electrician from "../../Pages/Electrician";
import Home from "../../Pages/Home";
import Men from "../../Pages/Men";
import NotFound from "../../Pages/NotFound";
import SingleProduct from "../../Pages/SingleProduct";
import Women from "../../Pages/Women";

export default function AllRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="women" element={<Women />}></Route>
        <Route path="men" element={<Men />}></Route>
        <Route path="electrician" element={<Electrician />}></Route>
        <Route path="appliance" element={<Appliance />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="men/:id" element={<SingleProduct/>}></Route>
      </Routes>
    </>
  );
}
