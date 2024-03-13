import {Route, Routes} from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Authentication from "../pages/Authentication";



const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="/cart" element={<Cart/> } />
     <Route path="/auth" element={<Authentication/>} />
    </Routes>
  )
}

export default AllRoutes