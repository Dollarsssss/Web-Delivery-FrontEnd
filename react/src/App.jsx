import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from './Orders'
import OrderCreate from './OrderCreate'
import OrderUpdate from "./OrderUpdate";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";


export default function App() {

  return (
      <div>
        <Routes>
        
          <Route path='/' element={<SignIn />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/update/:order_ID' element={<OrderUpdate />} />
          <Route path='/create' element={<OrderCreate />} />
     
         
        </Routes>
      </div>
  );
}
